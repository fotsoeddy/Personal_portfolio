import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import linkedin_icon from './linkedin_icon.png';
import x_icon from './x_icon.png';
import instagram_icon from './instagram_icon.png';
import github_icon_black from './github_icon_black.png';
import linkedin_icon_black from './linkedin_icon_black.png';
import x_icon_black from './x_icon_black.png';
import instagram_icon_black from './instagram_icon_black.png';
import django from './django.png';
import postgresql from './postgresql.png';
import profile2 from './profile2.jpeg';
import docker from './docker.png';
import postgresql2 from './postgresql-color.svg';
import docker2 from './docker-color.svg';
import python from './python-color.svg';
import redis from './redis-color.svg';
import celery from './celery-color.svg';
import nginx from './nginx-color.svg';
import linux from './linux-color.svg';
import ubuntu from './ubuntu-color.svg';

// New colored SVGs
import react_color from './react-color.svg';
import firebase_color from './firebase-color.svg';
import figma_color from './figma-color.svg';
import github_color from './github-color.svg';
import tailwind_color from './tailwindcss-color.svg';
import nextjs_color from './nextjs-color.svg';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  linkedin_icon,
  x_icon,
  instagram_icon,
  github_icon_black,
  linkedin_icon_black,
  x_icon_black,
  instagram_icon_black,
  django,
  postgresql,
  postgresql2,
  docker,
  docker2,
  python,
  redis,
  celery,
  nginx,
  linux,
  ubuntu,
  profile2,
  react_color,
  firebase_color,
  figma_color,
  github_color,
  tailwind_color,
  nextjs_color
};

export const workData = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.png',
    category: 'Website',
    tech: [assets.vscode, assets.figma_color, assets.git]
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: '/work-2.png',
    category: 'Mobile',
    tech: [assets.react_color, assets.firebase_color, assets.mongodb]
  },
  {
    title: 'AI-powered system',
    description: 'Artificial Intelligence',
    bgImage: '/work-3.png',
    category: 'AI',
    tech: [assets.django, assets.postgresql, assets.nextjs_color]
  },
];

export const serviceData = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages & Tools',
    description:
      'Python, JavaScript, HTML, CSS, TailwindCSS, React.js, Next.js, Django, Django REST Framework, PostgreSQL, MySQL, Git, Docker, Nginx, AWS (EC2, S3), Linux, Bash, CI/CD, Redis, Celery',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'B.Tech in Computer Science (currently pursuing)',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built more than 5 full-stack projects with focus on backend and DevOps practices',
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase_color,
  assets.mongodb,
  assets.figma_color,
  assets.git,
  assets.react_color,
  assets.github_color,
  assets.postgresql2,
  assets.docker2,
  assets.python,
  assets.redis,
  assets.celery,
  assets.nginx,
  assets.linux,
  assets.ubuntu,
  assets.tailwind_color,
  assets.nextjs_color
];
