import Image from "next/image";
import { useRouter } from "next/navigation";

export const CustomCard = ({ project, showReadMore }) => {
  const router = useRouter();

  const getTechStackAsset = (tech: string) => {
    console.log(tech);
    switch (tech) {
      case "nextjs":
        return "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png";
      case "react":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s";
      case "rails":
        return "https://www.inkoop.io/static/f0f7bbb5ef00110a0dcef7c2cb7d34a6/24f3d/logo.png";
      case "react-native":
        return "https://cdn.worldvectorlogo.com/logos/react-native-1.svg";
      case "nativescript":
        return "https://cdn.worldvectorlogo.com/logos/nativescript.svg";
      default:
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dIU8d5qChu_j1rdDlmDXwUegTV20DTquGw&s";
    }
  };

  return (
    <div
      className="bg-white shadow-lg p-[32px] rounded-[16px] w-full flex gap-[16px] transition duration-300 hover:shadow-xl hover:cursor-pointer"
      onClick={() => router.push(`${project.slug}`)}
    >
      <div className="min-w-[64px]">
        <Image
          src={project?.image}
          alt={`project-logo-${project?.title}`}
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-col w-full gap-[8px]">
        <p className="text-gray-700 text-2xl font-bold">{project?.title}</p>
        <p className="text-gray-700 font-light">{project?.description}</p>
        <div className="flex gap-[4px]">
          {project?.tech_stack &&
            project.tech_stack.map((tech: string, index: number) => {
              return (
                <Image
                  key={index.toString()}
                  src={getTechStackAsset(tech)}
                  alt={`${tech}`}
                  width={32}
                  height={32}
                  className="object-contain rounded-md hover:cursor-pointer"
                />
              );
            })}
        </div>
        {showReadMore !== false && (
          <div className="flex justify-end text-black mt-[8px]">
            <a className="hover:cursor-pointer hover:opacity-50 font-semibold text-sm">
              {"Read more ->"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
