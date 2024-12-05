import { SparklesIcon } from '@heroicons/react/20/solid';

type Props = {
  text: string;
};

const ListItem = ({ text }: Props) => {
  return (
    <li className="flex lg:items-center gap-3 text-xs xs:text-sm">
      <SparklesIcon className="h-3 w-3 text-[#1e7052]" />
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
