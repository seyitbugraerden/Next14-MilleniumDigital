import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import mey from "@/public/FireShot/mey.png";
import gazbir from "@/public/FireShot/gazbir.png";
import trb from "@/public/FireShot/trb.png";
import eud from "@/public/FireShot/eud.png";
import doris from "@/public/FireShot/doris.png";
import alas from "@/public/FireShot/alas.png";
import atlas from "@/public/FireShot/atlas.png";
export function BentoGridDemo() {
  return (
    <section>
      <h4 className="text-center py-12">Başlıca Projelerimiz</h4>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const Skeleton: React.FC<any> = ({ link }) => (
  <div
    style={{
      backgroundImage: `url(${link})`,
      backgroundPosition: "top",
      backgroundSize: "cover",
    }}
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  ></div>
);
const items = [
  {
    title: "Doris",
    header: <Skeleton link={doris} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Alas Fire",
    header: <Skeleton link={alas} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TRB",
    header: <Skeleton link={trb} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gazbir",
    header: <Skeleton link={gazbir} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "EUD",
    header: <Skeleton link={eud} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MEY Design",
    header: <Skeleton link={mey} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Atlas Grup",
    header: <Skeleton link={atlas} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
