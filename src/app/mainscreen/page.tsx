import Button from '@/components/Button';
import Image from 'next/image';
import img from '../../../public/images/mainScreenImg.png';

export default function MainScreen() {
  return (
    <div className="max-w-xs mx-auto    ">
      <Image
        src={img}
        alt=""
        className="h-[300px] pt-10 ml-[-2.5rem] object-contain"
      />
      <h1 className="font-medium text-4xl ">All your shopping in one App</h1>
      <p className="mt-6">
        Sell your devices the smarter, faster way for immediate cash and a
        cleaner conscience. Sell your devices the smarter, faster way for
        immediate cash and a cleaner conscience.
      </p>
      <div className="flex justify-between mt-12 gap-3.5">
        <Button className="flex-1" primary={true} content="Log in" />
        <Button className="flex-1" primary={false} content="Sign Up" />
      </div>
    </div>
  );
}
