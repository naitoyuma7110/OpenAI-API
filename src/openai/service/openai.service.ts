import { Injectable } from '@nestjs/common';
import { OpenAIApi, Configuration } from 'openai';
import { PrismaClient } from '@prisma/client';

type PostMessage = {
  message: string;
};

type PostAnswer = {
  content: string;
  isLiked: boolean | null;
};

type PostQuestion = {
  content: string;
};

interface PostAnswerQuestionData {
  answer: PostAnswer;
  question: PostQuestion;
}

const prisma = new PrismaClient();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

@Injectable()
export class OpenaiService {
  async getQuestion() {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'ChatGPT について教えて' }],
    });
    return completion.data.choices[0].message;
  }

  async getGoodAnswers() {
    const goodAnswers = await prisma.answer.findMany({
      where: {
        isLiked: true,
      },
      include: {
        question: true,
      },
    });
    return goodAnswers;
  }

  async postQuestion(postData: PostMessage) {
    const good = await prisma.answer.findMany({
      where: {
        isLiked: true,
      },
      include: {
        question: true,
      },
    });
    const returnGoodContent = () => {
      const content = [];
      good.forEach((el, i) => {
        const questionContent = i === 0 ? '質問内容：' : '次の質問内容：';
        content.push(
          questionContent + el.question.content + '返答内容：' + el.content,
        );
      });
      return content;
    };
    const bad = await prisma.answer.findMany({
      where: {
        isLiked: false,
      },
      include: {
        question: true,
      },
    });
    const returnBadcontent = () => {
      const content = [];
      bad.forEach((el, i) => {
        const questionContent = i === 0 ? '質問内容：' : '次の質問内容：';
        content.push(
          questionContent + el.question.content + '返答内容：' + el.content,
        );
      });
      return content;
    };

    const content =
      'あなたは株式会社カナミックネットワークのサポートシステムとして会話を行ってください。多くの質問の内容はカナミックネットワークについて聞かれています。' +
      '過去の質問と回答内容から学習してください。' +
      '以下が良い回答例です。' +
      returnGoodContent() +
      '以下が悪い回答例です。' +
      returnBadcontent() +
      'これらの質問、回答内容を参考に質問に回答して下さい。';
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: postData.message },
        {
          role: 'system',
          content,
        },
      ],
    });
    return completion.data.choices[0].message;
  }

  async postAnswer(data: PostAnswerQuestionData) {
    return await prisma.question.create({
      data: {
        ...data.question,
        answer: {
          create: {
            ...data.answer,
          },
        },
      },
    });
  }
}
