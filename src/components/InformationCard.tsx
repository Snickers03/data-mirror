import Image from "next/image";

interface InforamtionCardProps {
  label: string | undefined;
  path: string;
  alt?: string;
  isCharging?: boolean;
}

const InformationCard = ({
  label,
  path,
  alt = "Icon",
  isCharging = false,
}: InforamtionCardProps) => {
  return (
    <div className='flex items-center space-x-2'>
      <Image src={path} width={30} height={30} alt={alt} />
      <div className='flex items-center'>
        <p className='text-lg'>{label ?? "Unknown"}</p>
        {isCharging && (
          <Image src='/device/bolt.png' width={30} height={30} alt='charging' />
        )}
      </div>
    </div>
  );
};

export default InformationCard;
