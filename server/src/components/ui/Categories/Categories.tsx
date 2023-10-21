import { TbBeach } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { TbPool } from 'react-icons/tb';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import CategoryBox from '../CategoryBox/CategoryBox
import { useLocation } from 'react-router-dom';
import { Container } from '../../shared';
import { useMemo } from 'react';
import { ReadOnlyURLSearchParams } from '../../../types';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern',
  },
  {
    label: 'Countryside',
    icon: TbBeach,
    description: 'This property in the countryside!',
  },
  // {
  //   label: 'Pool',
  //   icon: TbPool,
  //   description: 'This property has a pool!',
  // },
  // {
  //   label: 'Islands',
  //   icon: GiIsland,
  //   description: 'This property is on an island!',
  // },
  // {
  //   label: 'Lake',
  //   icon: GiBoatFishing,
  //   description: 'This property is close to a lake!',
  // },
  // {
  //   label: 'Skiing',
  //   icon: FaSkiing,
  //   description: 'This property has skiing activities!',
  // },
  // {
  //   label: 'Castles',
  //   icon: GiCastle,
  //   description: 'This property is ina castle!',
  // },
  // {
  //   label: 'Camping',
  //   icon: GiForestCamp,
  //   description: 'This property has camping activities!',
  // },
  // {
  //   label: 'Arctic',
  //   icon: BsSnow,
  //   description: 'This property has camping activities!',
  // },
  // {
  //   label: 'Cave',
  //   icon: GiCaveEntrance,
  //   description: 'This property is in a cave!',
  // },
  // {
  //   label: 'Desert',
  //   icon: GiCactus,
  //   description: 'This property is in the desert!',
  // },
  // {
  //   label: 'Barns',
  //   icon: GiBarn,
  //   description: 'This property is in the barn!',
  // },
  // {
  //   label: 'Lux',
  //   icon: IoDiamond,
  //   description: 'This property is luxurious!',
  // },
];

const Categories = () => {
  const { pathname, search } = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );
  const category = searchParams?.get('category');
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between items-center">
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            isSelected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
