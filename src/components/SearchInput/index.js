import React, { memo, useState } from 'react'
import { Container, Input } from './style'

function SearchInput(props){
    const [ value, setValue ] = useState('')
    const {placeholder} = props
    return(
        <Container>
            <button className='icon iconfont icon-search' />
            <Input type='search' value={value} onConfom={(e)=>{
                const { target:{value} } = e
                console.log(e.target)
                setValue(value)
                // debounce(function(){
                //     console.log('asasasdas')
                //     const { target:{value} } = e
                //     setValue(value)
                // }, 1000)()

            }} />
            {!value&&<p className='placeholder'>{placeholder}</p>}
            {value}
        </Container>
    )

}

SearchInput.defaultProps={
    placeholder:'今天是美好的一天'  
}

export default memo(SearchInput)

// 我觉得这里可以写得更好

function debounce(fn, wait) {
    let timeout;
    return function () {
        
        timeout&&clearTimeout(timeout)
    
        timeout = setTimeout(function () {
            fn.apply(this);
        }, wait)
    };
  }