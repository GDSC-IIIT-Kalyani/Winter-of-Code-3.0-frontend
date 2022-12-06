import oneStop from '../../assets/sponsors/1stop.png';
// import celo from '../../assets/sponsors/celo.png';
import codeForCause from '../../assets/sponsors/codeForCause.png';
import devfolio from '../../assets/sponsors/devfolio.png';
import filecoin from '../../assets/sponsors/filecoin.png';
import github from '../../assets/sponsors/github.png';
import hackclub from '../../assets/sponsors/hackclub.png';
import jetBrains from '../../assets/sponsors/jetBrains.jpg';
import newtonSchool from '../../assets/sponsors/newton.png';
import noticebard from '../../assets/sponsors/noticebard.svg';
import polygon from '../../assets/sponsors/Polygon.png';
import prepbytes from '../../assets/sponsors/prepbytes.png';
import replit from '../../assets/sponsors/replitt.png';
import skit from '../../assets/sponsors/skit2.png';
// import tezos from '../../assets/sponsors/tezos.png';
import solana from '../../assets/sponsors/solana.png';

const sponsorsData = {
    diamond: [
        { title: 'Devfolio', image: devfolio ,link: "https://devfolio.co/" },
        { title: 'GitHub', image: github ,link: "https://github.com/"},
        { title: 'Polygon', image: polygon, link: "https://polygon.technology/"},
    ],
    platinum: [
        { title: 'Repl.it', image: replit ,link:"https://replit.com/"},
        { title: 'Solana', image: solana ,link:"https://solana.com/"},
        { title: 'FileCoin', image: filecoin,link:"https://filecoin.io/" },
        // { title: 'Jina AI', image: jinaAi },
        // { title: 'Tezos', image: tezos },
    ],
    gold: [
        { title: 'Code For Cause', image: codeForCause },
        { title: 'Jet Brains', image: jetBrains },
    ],
    silver: [
        { title: 'Hackclub', image: hackclub },
        { title: 'Skit', image: skit },
    ],
    ivory: [
        { title: '1Stop.ai', image: oneStop },
        { title: 'Newton School', image: newtonSchool },
        { title: 'PrepBytes', image: prepbytes },
    ],
    media: [{ title: 'Noticebard', image: noticebard }],
};

export default sponsorsData;