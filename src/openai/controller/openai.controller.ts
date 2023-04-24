import { Controller, Post, Get, Body } from '@nestjs/common';
import { OpenaiService } from '../service/openai.service';

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

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}
  @Get()
  async getQuestion() {
    return await this.openaiService.getQuestion();
  }
  @Get('/good')
  async getGoodAnswers() {
    return await this.openaiService.getGoodAnswers();
  }
  @Post()
  async postQuestion(@Body() postData: PostMessage) {
    return await this.openaiService.postQuestion(postData);
  }
  @Post('/qa')
  async postAnswer(@Body() data: PostAnswerQuestionData) {
    return await this.openaiService.postAnswer(data);
  }
}
