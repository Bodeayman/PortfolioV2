import {
    SiFlutter,
    SiDart,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiSharp,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiDotnet,
    SiFlask,
    SiGithub,
    SiDocker,
    SiPostman,
    SiRabbitmq,
    SiHiveBlockchain,
} from "react-icons/si";

const skills = [
    // 🌐 Web Development
    { name: "HTML", level: 85, icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 80, icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Flask", level: 82, icon: <SiFlask className="text-gray-300" /> },
    { name: "ASP.NET", level: 88, icon: <SiDotnet className="text-indigo-400" /> },
    { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-300" /> },

    // 📱 Mobile Development
    { name: "Flutter", level: 90, icon: <SiFlutter className="text-sky-400" /> },
    { name: "Hive", level: 75, icon: <SiHiveBlockchain className="text-yellow-400" /> },
    { name: "Bloc / Cubit / Provider", level: 80, icon: <SiFlutter className="text-teal-300" /> },

    // 🗄️ Databases
    { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", level: 88, icon: <SiPostgresql className="text-sky-500" /> },

    // ⚙️ Tools & Platforms
    { name: "GitHub", level: 88, icon: <SiGithub className="text-gray-200" /> },
    { name: "Docker", level: 75, icon: <SiDocker className="text-blue-400" /> },
    { name: "Postman", level: 80, icon: <SiPostman className="text-orange-400" /> },
    { name: "RabbitMQ", level: 70, icon: <SiRabbitmq className="text-amber-500" /> },

    // 💻 Programming Languages
    { name: "Dart", level: 88, icon: <SiDart className="text-cyan-400" /> },

    { name: "Python", level: 85, icon: <SiPython className="text-yellow-400" /> },
    { name: "C#", level: 90, icon: <SiSharp className="text-purple-500" /> },
    { name: "C++", level: 85, icon: <SiCplusplus className="text-blue-500" /> },
];

export default function SkillsSection() {
    return (
        <div className="grid gap-8">
            <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl shadow-2xl hover:border-amber-500/40 transition-all">
                <h3 className="text-3xl font-bold mb-8 text-amber-400">Technical Skills</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-zinc-950 p-4 rounded-xl shadow-md hover:shadow-amber-500/30 hover:scale-[1.02] transition-all"
                        >
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="font-semibold text-gray-200">{skill.name}</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-right text-gray-400 mt-1">{skill.level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
