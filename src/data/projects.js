import edesaImg from "../assets/edesa.png";
import sipinjamImg from "../assets/sipinjam.png";
import jagakuinImg from "../assets/jagakuin.png";
import solophotoImg from "../assets/solophoto.png";
import arImg from "../assets/ar.png";

const projects = [
  {
    title: "SiPinjam",
    description: "Aplikasi peminjaman berbasis PHP dan Tailwind CSS.",
    tech: ["Tailwind", "PHP"],
    github: "https://github.com/sipinjam/sipinjam.git",
    image: sipinjamImg,
  },
  {
    title: "E-Desa - Sistem Informasi Desa Digital",
    description:
      "Web dashboard pencatatan penduduk menggunakan Laravel dan Vue.",
    tech: ["Vue", "Laravel"],
    github: "https://github.com/PBL-TI2B/sistem-penduduk-api-vue.git",
    image: edesaImg,
  },
  {
    title: "Jagakuin",
    description: "Website tukar jasa modern dengan react dan Tailwind CSS.",
    tech: ["React", "Laravel"],
    github: "https://github.com/Rahmalyana/Jagakuin.git",
    image: jagakuinImg,
  },
  {
    title: "Company Profile SoloPhoto",
    description:
      "Website company profile untuk UMKM SoloPhoto dengan Tailwind CSS dan JavaScript.",
    tech: ["Tailwind", "JavaScript"],
    github: "https://github.com/rohimatun/WebCompanyProfile-SoloPhoto.git",
    image: solophotoImg,
  },
  {
    title: "AR Project",
    description:
      "Pengembangan media interaktif berbasis AR menggunakan Unity dan Vuforia Engine.",
    tech: ["Unity", "Vuforia", "C#"],
    github: "https://github.com/helsach/AR-Project.git",
    image: arImg,
  },
];

export default projects;
