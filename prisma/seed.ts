import { PrismaClient } from '@prisma/client';
import { qaData } from './data/qa';

const prisma = new PrismaClient();

async function main() {
  const hospital1 = await prisma.hospital.create({
    data: {
      name: 'bbb医院',
      facility: {
        create: {
          name: 'Facility A',
        },
      },
      company: {
        create: {
          name: '社会福祉法人サクラ',
          postCode: '001-0001',
          address: '新潟県長岡市軽井沢671-2',
        },
      },
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: 'aaa医院',
      facility: {
        create: {
          name: 'Facility B',
        },
      },
      company: {
        create: {
          name: '社会福祉法人バラ',
          postCode: '002-0002',
          address: '京都府京都市南区西九条西柳ノ内町88-15',
        },
      },
    },
  });

  const carehome1 = await prisma.carehome.create({
    data: {
      name: 'bbb介護',
      facility: {
        create: {
          name: 'Facility C',
        },
      },
      company: {
        create: {
          name: '社会福祉法人アジサイ',
          postCode: '003-0003',
          address: '石川県能美市三ツ屋町910-10',
        },
      },
    },
  });

  const carehome2 = await prisma.carehome.create({
    data: {
      name: 'aaa介護',
      facility: {
        create: {
          name: 'Facility D',
        },
      },
      company: {
        create: {
          name: '社会福祉法人ガーベラ',
          postCode: '004-0004',
          address: '鹿児島県指宿市山川金生町92-10',
        },
      },
    },
  });

  await prisma.company.create({
    data: {
      name: '社会福祉法人サクラ',
      postCode: '001-0001',
      address: '新潟県長岡市軽井沢671-2',
    },
  });

  await prisma.user.create({
    data: {
      firstName: '田中',
      lastName: '太郎',
      birthDate: '1999-01-01T00:00:00.000Z',
      address: '東京都',
      tel: '123-456-789',
      email: 'xxxx@gmail.com',
      facilityId: hospital1.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      firstName: '加藤',
      lastName: '次郎',
      birthDate: '1909-01-01T00:00:00.000Z',
      address: '東京都',
      tel: '741-852-963',
      email: 'sample@example.com',
      facilityId: hospital2.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      firstName: '史郎',
      lastName: '政宗',
      birthDate: '1989-01-01T00:00:00.000Z',
      address: '東京都',
      tel: '741-999-999',
      email: 'test@example.com',
      facilityId: carehome1.facilityId,
    },
  });

  await prisma.user.create({
    data: {
      firstName: '佐藤',
      lastName: '八郎',
      birthDate: '1988-01-01T00:00:00.000Z',
      address: '東京都',
      tel: '741-666-963',
      email: 'example@example.com',
      facilityId: carehome2.facilityId,
    },
  });

  qaData.forEach(async (qa) => {
    await prisma.question.create({
      data: qa,
    });
  });

  console.log('Seed data created!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
