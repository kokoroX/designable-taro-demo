import { Button } from '@antmjs/vantui';
import { View } from '@tarojs/components-react';
import { useState } from 'react';
import Countdown from 'react-countdown'

export const Captcha = ({ className, onClick, title }) => {
  const [date, setDate] = useState(+new Date());
  const handleClick = () => {
    setDate(Date.now() + 60 * 1000)
    onClick()
  }
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Button className={className} type="default" onClick={handleClick}>{title}</Button>;
    } else {
      const remain = minutes * 60 + seconds
      // Render a countdown
      return <View className={className}>{remain}s</View>;
    }
  };

  return (
    <Countdown
      date={date}
      renderer={renderer}
      key={date}
    />
  )
}
