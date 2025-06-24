import { ReactNode } from 'react';

import PythonIcon from './python.svg?react';
import ReactIcon from './react.svg?react';
import JavaScriptIcon from './javascript.svg?react';
import TypeScriptIcon from './typescript.svg?react';
import JavaIcon from './java.svg?react';
import HTMLIcon from './html.svg?react';
import CSSIcon from './css.svg?react';
import FigmaIcon from './figma.svg?react';
import DockerIcon from './docker.svg?react';
import GitIcon from './git.svg?react';


const icons : {[name: string] : ReactNode} = {
  "python": <PythonIcon />,
  "react": <ReactIcon />,
  "javascript": <JavaScriptIcon />,
  "typescript": <TypeScriptIcon />,
  "java": <JavaIcon />,
  "html": <HTMLIcon />,
  "css": <CSSIcon />,
  "figma": <FigmaIcon />,
  "docker": <DockerIcon />,
  "github": <GitIcon />,
}

export default icons;
