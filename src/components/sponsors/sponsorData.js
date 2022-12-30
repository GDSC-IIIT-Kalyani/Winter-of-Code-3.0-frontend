import devfolio from '../../assets/sponsors/devfolio.png';
import filecoin from '../../assets/sponsors/filecoin.png';
import github from '../../assets/sponsors/github.png';
import jetBrains from '../../assets/sponsors/jetBrains.jpg';
import newtonSchool from '../../assets/sponsors/newton.png';
import polygon from '../../assets/sponsors/Polygon.png';
import replit from '../../assets/sponsors/replitt.png';
import echo3D from '../../assets/sponsors/echo3D.png';
import solana from '../../assets/sponsors/solana.png';
import codingBlocks from '../../assets/sponsors/cblogo.png';
import styava from '../../assets/sponsors/StyavaDev.png';

const sponsorsData = {
    diamond: [
        { title: 'Repl.it', image: replit ,link:"https://replit.com/"},
        { title: 'Solana', image: solana ,link:"https://solana.com/"},
        { title: 'FileCoin', image: filecoin,link:"https://filecoin.io/" },
        { title: 'Styava', image: styava,link:"http://www.styava.com/" },
        // { title: 'Jina AI', image: jinaAi },
        // { title: 'Tezos', image: tezos },
    ],
    platinum: [
        { title: 'Devfolio', image: devfolio ,link: "https://devfolio.co/" },
        { title: 'GitHub', image: github ,link: "https://github.com/"},
        { title: 'Polygon', image: polygon, link: "https://polygon.technology/"},
    ],
    gold: [
        // { title: 'Code For Cause', image: codeForCause, link: "https://codeforcause.org/" },
        { title: 'Newton School', image: newtonSchool, link: "https://www.newtonschool.co/" },
        { title: 'echo3D', image: echo3D, link: "https://www.echo3d.com/" },
    ],
    silver: [
        // { title: 'Hackclub', image: hackclub, link: "https://hack-club.com/" },
        // { title: 'Skit', image: skit, link: "https://skit.ai" },
        { title: 'Jet Brains', image: jetBrains, link: "https://www.jetbrains.com" },
        { title: 'Coding Blocks', image: codingBlocks, link: "https://codingblocks.com" },
    ],
};

export default sponsorsData;
