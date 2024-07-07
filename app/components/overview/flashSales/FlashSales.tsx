"use client"
import Countdown from './Countdown'
import { salesData } from '../../../helper/data';
import Icon from '@/app/atomic/atoms/icon/Icon';
import { buttonVariants, iconVariants } from '@/app/variant/variants';
import SalesCard from '@/app/atomic/templates/SalesCard';
import { containerVariants } from '@/app/variant/variants';
import Container from '@/app/atomic/atoms/container/Container';
import Link from 'next/link';
import Button from '@/app/atomic/atoms/button/Button';



const FlashSales = () => {

  const targetDate = new Date('2024-07-14T00:00:00');

  const slideLeft = () => {
    const slider = document.getElementById("slider") ?? document.createElement('div');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider") ?? document.createElement('div');
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <Container variant={containerVariants.DEFAULT}>
      <Container variant={containerVariants.WRAPPER}>
        <div className='border-l-[15px] border-l-orange px-[20px]'>
          <p className='text-[30px] font-bold text-black90'>
            Flash Sales
          </p>
          <Countdown targetDate={targetDate} className='gap-[10px] font-bold font-sans text-grey flex items-center' />
        </div>
        <Container variant={containerVariants.FLEX_END} className='mt-[20px] mb-[20px] gap-[10px]'>
          <Icon src='arrow-left' alt="left" variant={iconVariants.FILLED} onClick={slideLeft} />
          <Icon src='arrow-right' alt="right" variant={iconVariants.FILLED} onClick={slideRight} />
        </Container>
      </Container>
      <div id='slider' className="md:ml-[7rem] sm:ml-[4rem] ml-[1rem] flex gap-[20px] overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"  >
        {salesData.map((slug, i) => (
          <div>
            <SalesCard
              key={i}
              isFilled={false}
              imgSrc={slug.image}
              prodName={slug.name}
              prevPrice={slug.prevPrice}
              badgeValue={slug.badgeValue}
              currentPrice={slug.slashPrice}
            />
          </div>
        ))}
      </div>
      <Container variant={containerVariants.WRAPPER} className='mt-[30px]'>
        <Button variant={buttonVariants.DEFAULT} className='text-white'>
          View All Products
        </Button>
      </Container>
    </Container>
  )
}

export default FlashSales
