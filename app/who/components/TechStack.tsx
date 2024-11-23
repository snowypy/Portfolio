import { FaJava } from "react-icons/fa";
import { 
    SiKotlin, 
    SiReact, 
    SiJavascript, 
    SiNextdotjs, 
    SiTypescript, 
    SiDeno, 
    SiPython, 
    SiTailwindcss 
  } from 'react-icons/si'
  
  const techStack = [
    { name: 'Kotlin', Icon: SiKotlin, color: '#E8DBF1' },
    { name: 'Java', Icon: FaJava, color: '#FFF4D3' },
    { name: 'React', Icon: SiReact, color: '#E3F2F9' },
    { name: 'Javascript', Icon: SiJavascript, color: '#FFF4D3' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#E8E8E8' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#E3F2F9' },
    { name: 'Deno', Icon: SiDeno, color: '#F5E6D3' },
    { name: 'Python', Icon: SiPython, color: '#E3F9F2' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#E3F2F9' },
  ]
  
  interface TechStackProps {
    singleTech?: string;
  }

  export function TechStack({ singleTech }: TechStackProps) {
    const filteredTech = singleTech
      ? techStack.find(({ name }) => name === singleTech)
      : null
  
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-[#DCB8B0] mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {filteredTech ? (
            <span
              key={filteredTech.name}
              className="px-4 py-2.5 text-[#2C2F33] rounded-lg text-lg font-medium border-2 border-[#2C2F33]/10 hover:border-[#2C2F33]/20 transition-all duration-200 cursor-default shadow-sm transform hover:translate-y-[-2px] hover:shadow-md flex items-center space-x-2"
              style={{
                backgroundColor: filteredTech.color,
                boxShadow: '2px 2px 0 rgba(44, 47, 51, 0.1)',
              }}
            >
              <filteredTech.Icon className="w-5 h-5" />
              <span className="font-roboto">{filteredTech.name}</span>
            </span>
          ) : (
            techStack.map(({ name, Icon, color }) => (
              <span
                key={name}
                className="px-4 py-2.5 text-[#2C2F33] rounded-lg text-lg font-medium border-2 border-[#2C2F33]/10 hover:border-[#2C2F33]/20 transition-all duration-200 cursor-default shadow-sm transform hover:translate-y-[-2px] hover:shadow-md flex items-center space-x-2"
                style={{
                  backgroundColor: color,
                  boxShadow: '2px 2px 0 rgba(44, 47, 51, 0.1)',
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-roboto">{name}</span>
              </span>
            ))
          )}
        </div>
      </div>
    )
  }
  