import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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
    header: (
      <Skeleton link="https://i.ibb.co/P6yfXn8/Fire-Shot-Capture-010-DORIS-www-dorisfire-com.png" />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Alas Fire",
    header: (
      <Skeleton link="https://i.ibb.co/3pVs073/Fire-Shot-Capture-011-Alas-Fire-Technologies-www-alasfire-com.png" />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TRB",
    header: (
      <Skeleton link="https://i.ibb.co/NxZ49KY/Fire-Shot-Capture-012-TRB-International-Uluslararas-Belgelendirme-trb-com-tr.png" />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gazbir",
    header: (
      <Skeleton link="https://i.ibb.co/XXYrW5y/Fire-Shot-Capture-013-GAZB-R-T-rkiye-Do-al-Gaz-Da-t-c-lar-Birli-i-www-gazbir-org-tr.png" />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "EUD",
    header: (
      <Skeleton link="https://i.ibb.co/kgD3Sqp/Fire-Shot-Capture-014-Elektrik-reticileri-Derne-i-E-D-www-eud-org-tr.png" />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MEY Design",
    header: (
      <Skeleton link="https://i.ibb.co/zrmLPK7/Fire-Shot-Capture-017-MEY-DESIGN-www-meydesign-com-tr.png" />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Atlas Grup",
    header: (
      <Skeleton link="https://i.ibb.co/bbTbrC8/Fire-Shot-Capture-015-Atlas-Grup-www-atlasgrup-ik-com.png" />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
