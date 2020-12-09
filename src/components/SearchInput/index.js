import React, { memo, useCallback, useState } from 'react'
import { Container, Input } from './style'

function SearchInput (props) {
  const [value, setValue] = useState('')
  const handleChange = useCallback((e) => {
    const { target } = e
    setValue(target.value)
  }, [])
  const { placeholder } = props
  return (
    <Container>
      <button className='icon iconfont icon-search' />
      <Input type='search' value={value} onChange={handleChange} />
      {!value && <p className='placeholder'>{placeholder}</p>}
      {value}
    </Container>
  )
}

SearchInput.defaultProps = {
  placeholder: '今天是美好的一天'
}

export default memo(SearchInput)

// 我觉得这里可以写得更好
