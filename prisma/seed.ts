import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();


const initialPost = [
    {
        title:'ADD POST',
        slug:'add-post',
        content:"CONTENT SAMPLE",
        author:{
          connectOrCreate:{
            where:{
              email:'john@gmail.com'
            },
            create:{
              email:'john@gmail.com',
              hashedPassword:'tyddd7f7uf878'
            }
          }
        }
    },
    {
      title:'POST 2',
      slug:'post-2',
      content:"Post second Sample content",
      author:{
        connectOrCreate:{
          where:{
            email:'john@gmail.com'
          },
          create:{
            email:'john@gmail.com',
            hashedPassword:'tyddd7f7uf878'
          }
        }
      }
    },
    {
      title:'POST 3',
      slug:'post-3',
      content:"Post third Sample content",
      author:{
        connectOrCreate:{
          where:{
            email:'john@gmail.com'
          },
          create:{
            email:'john@gmail.com',
            hashedPassword:'tyddd7f7uf878'
          }
        }
      }
  }
]


async function main() {
  for(let post of initialPost){
    const newPost = await prisma.post.create({
      data:post
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })