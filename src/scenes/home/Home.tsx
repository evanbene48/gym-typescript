import { SelectedPage } from '@/shared/types';
import React from 'react'

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <div>Home</div>
  )
}

export default Home