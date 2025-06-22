import { projectData } from "./projectData"
import SectionHeader from '../../components/comps/SectionHeader';
import { Button } from "@heroui/button";
import Image from "next/image";
import { Link } from "@heroui/link";

export async function generateStaticParams() {
  const pages = projectData;

  return pages.map((post) => ({
    slug: post.id
  }))
}

export default async function Page({ params }) {
  const { projects } = await params;
  const { title, desc, image, id } = projectData.find((p) => p.id === projects);

  return (
    <main>
      <div className="h-72 bg-secondary flex flex-col justify-center">
        <SectionHeader title={title} />
      </div>

      <div className="container flex flex-col md:flex-row px-12 md:px-24 py-12 mx-auto gap-4">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <p className="text-lg max-w-md">
            {desc}
          </p>
          
          <div>
            <Button
              as={Link}
              color="primary"
              size="lg"
              href={`/#Projects`}
              variant="solid"
              radius="none"
            >
              Return Home
            </Button>
          </div>
        </div>

          <div className="w-full md:w-1/2">
            <div className="h-96">
            <Image
                src={image}
                alt="Project image"
                width={500}
                height={500}
                className="w-full h-full object-contain"
            />
            </div>
        </div>
      </div>
    </main>
  );
}