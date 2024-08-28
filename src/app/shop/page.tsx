'use client'
import BreadCrump from '@/components/BreadCrump'
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import React, { useState } from 'react'
import { Button, Dropdown, MenuProps, message, Space, DrawerProps, Drawer, Collapse,} from "antd";
import ShopSidebar from '@/components/ShopSidebar';
import ProductCard from '@/components/Card';

export default function ShopPage() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [range, setRange] = useState<any>([10, 200]);
  const [grid, setGrid] = useState(5)
  const [gridView, setGridView] = useState(false)
  const handleChangeGrid = ()=>{
    setGridView(true)
  }

  console.log(gridView, "grid")
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  //dwaer end
  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  //functions for filter
  const handleBrandChange = (brand:any)=>{
    setSelectedBrand((prevBrand:any)=> prevBrand.includes(brand) ? prevBrand.filter((b:any)=> b !== brand) : [...prevBrand, brand])
  }
  const handleColorChange = (color:any)=>{
    setSelectedColor((prevColor:any)=>prevColor.includes(color) ? prevColor.filter((c:any)=> c!== color) : [...prevColor, color])
  }
  const handleSizeChange = (size:any)=>{
    setSelectedSize((prevSize:any)=>prevSize.includes(size) ? prevSize.filter((s:any)=> s!== size) : [...prevSize, size])
  }
  const handlePriceChange = (range:any)=>{
    setRange(range)
  }
  const handleGridChange = (grid:any)=>{
    setGrid(grid)
  }

  //items
  const slideToShow= [
    {
      id:1,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:70,
      discounted:60,
      brand:'zara',
      colors:'white',
      size:'small'
    },
    {
      id:2,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:72,
      discounted:65,
      brand:'nike',
      colors:'brown',
      size:'large'
    },
    {
      id:3,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:75,
      discounted:68,
       brand:'adidas',
      colors:'red',
      size:'medium'
    },
    {
      id:4,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:80,
      discounted:70,
       brand:'lotto',
      colors:'teal',
      size:'xl'
    },
    {
      id:5,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:83,
      discounted:75,
       brand:'puma',
      colors:'pink',
      size:'xxl'
    },
    {
      id:6,
      image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name:'Tomato Hybrid Vegetable Seeds',
      price:75,
      discounted:70,
       brand:'nike',
      colors:'white',
      size:'medium'
    },
  ]
  
  const filteredProducts = slideToShow.filter((item:any)=>{
    const brandMatch = selectedBrand.length === 0 || selectedBrand.includes(item.brand);
    const colorMatch = selectedColor.length === 0 || selectedColor.includes(item.colors);
    const sizeMatch = selectedSize.length === 0 || selectedSize.includes(item.size);
    const priceMatch = item.price >=  range[0] && item.price <= range[1];
    return brandMatch && colorMatch && sizeMatch && priceMatch;
  })

  console.log(filteredProducts, "filterded")

  return (
    <div className='h-auto bg-green-50'>
      <BreadCrump pageName='category' lastName='Category'/>
      <div className='m-4 lg:mt-6 lg:mx-20'>
        <div className='flex'>
          <div className='w-1/4 hidden lg:block mx-4'>
           <ShopSidebar 
           onBrandChange = {handleBrandChange}
           onColorChange = {handleColorChange}
           onSizeChange = {handleSizeChange}
           onPriceChange = {handlePriceChange}
           range={range}
       
           />
          </div>
          <div className='lg:w-3/4'>
            <div className='w-full'>
              <img src="/assets/images/category/1.jpg" alt="" className='w-full' />
            </div>
            <div className='mt-4 lg:m-2'>
              <h3 className='text-lg font-bold '>Fashion</h3>
              <h4 className='font-semibold py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
              <p className='text-sm lg:text-base text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className='lg:hidden pt-2'>
              <Button className='bg-blue-400 text-white' onClick={showDrawer}><FaFilter className='text-white' />Filter</Button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 my-2'>
              <div className='border p-2 text-sm font-semibold text-gray-600'>
                Showing Products 1-24 of 10 Result
              </div>
              <div className='border hidden lg:block p-2 text-sm font-semibold text-gray-600'>
                <div className='flex'>
                  <div className='flex justify-between items-center mr-2 w-1/4'>
                    <div className='m-2' ><BsFillGrid3X3GapFill className='cursor-pointer' /></div>
                    <div className='m-2' ><TfiMenuAlt className='cursor-pointer' onClick={()=> handleChangeGrid()} /></div>
                  </div>
                  <div className='flex justify-end items-center w-3/4'>
                    <div className='mx-2 hover:cursor-pointer' onClick={()=>handleGridChange(2)}>
                      <img src="/assets/images/category/icon/2.png" alt="" className='w-4 h-4' />
                    </div>
                    <div className='mx-2  hover:cursor-pointer' onClick={()=>handleGridChange(3)}>
                      <img src="/assets/images/category/icon/3.png" alt="" className='w-6 h-4' />
                    </div>
                    <div className='mx-2 hover:cursor-pointer' onClick={()=>handleGridChange(4)}>
                      <img src="/assets/images/category/icon/4.png" alt="" className='w-9 h-4' />
                    </div>
                    <div className='mx-2 hover:cursor-pointer' onClick={()=>handleGridChange(6)}>
                      <img src="/assets/images/category/icon/6.png" alt="" className='w-12 h-4' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center border p-2'>
                <Dropdown menu={{ items, onClick }}>
                  <a onClick={(e) => e.preventDefault()} className='w-full flex justify-between items-center'>
                    <Space>
                      24 Products Per Page
                    </Space>
                    <FaChevronDown className='p-0 m-0' />
                  </a>
                </Dropdown>
              </div>
              <div className='flex justify-center items-center border p-2'>
                <Dropdown menu={{ items, onClick }} className='w-full'>
                  <a onClick={(e) => e.preventDefault()} className='w-full flex justify-between items-center'>
                    <Space>
                      Sorting items
                    </Space>
                    <FaChevronDown className='p-0 m-0' />
                  </a>
                </Dropdown>
              </div>
            </div>
            <div>
                <ProductCard 
                items={filteredProducts}
                grid={grid}
                gridView={gridView}
                />
              </div>
          </div>
        </div>
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          bodyStyle={{ padding: 0 }}
        >
          <div className='my-2'>
            <Button onClick={onClose} className='border-none font-bold text-lg'><IoIosArrowBack /> Back</Button>
          </div>
          {/* <div className='m-4'>
          <Collapse defaultActiveKey={['1']}
          expandIconPosition="right"
          ghost 
          className='font-bold'
          >
            <Panel header="BRAND" key="1" className='border-y'>
              <p><Checkbox className='font-semibold'>ZARA</Checkbox></p>
              <p><Checkbox className='font-semibold'>NIKE</Checkbox></p>
              <p><Checkbox className='font-semibold'>ADIDAS</Checkbox></p>
              <p><Checkbox className='font-semibold'>LOTTO</Checkbox></p>
              <p><Checkbox className='font-semibold'>PUMA</Checkbox></p>
            </Panel>
            <Panel header="COLORS" key="2" className='uppercase border-y'>
              <p><Checkbox  className='custom-checkbox font-semibold'>White</Checkbox></p>
              <p><Checkbox className='custom-checkbox1 font-semibold'>Brown</Checkbox></p>
              <p><Checkbox className='custom-checkbox2 font-semibold'>Red</Checkbox></p>
              <p><Checkbox className='custom-checkbox3 font-semibold'>Teal</Checkbox></p>
              <p><Checkbox className='custom-checkbox4 font-semibold'>Pink</Checkbox></p>
            </Panel>
            <Panel header="SIZE" key="3" className='border-y'>
            <p><Checkbox className='font-semibold'>S</Checkbox></p>
              <p><Checkbox className='font-semibold'>M</Checkbox></p>
              <p><Checkbox className='font-semibold'>L</Checkbox></p>
              <p><Checkbox className='font-semibold'>XL</Checkbox></p>
              <p><Checkbox className='font-semibold'>XXL</Checkbox></p>
            </Panel>
            <Panel header="PRICE" key="4" className='border-y'>
            <Slider
                range
                min={500}
                max={3000}
                defaultValue={[1000, 2000]}
                value={range}
                onChange={setRange}
                tooltip={
                  {
                    formatter: value => `৳${value}`,
                    
                  }
                  
                }
                
              />
                     <div className='p-2 text-base lg:text-lg'>
                      Selected Range: <span className='font-normal'>৳ {range[0]} - ৳ {range[1]}</span>
                    </div>
            </Panel>
          </Collapse>
          </div> */}
          <ShopSidebar
             onBrandChange = {handleBrandChange}
             onColorChange = {handleColorChange}
             onSizeChange = {handleSizeChange}
             onPriceChange = {handlePriceChange}
             range={range}
          />
        </Drawer>
      </div>
    </div>
  )
}
