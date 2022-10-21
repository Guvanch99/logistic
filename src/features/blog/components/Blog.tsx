import styled from 'styled-components/macro'
import Card from './Card'
import Image from '../../../core/assets/incoterms.png'

const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 20px 200px 20px;
  flex: 1 1 auto;
`
const Blog = () => (
  <WrapperStyled>
    <Card image={Image} label="blog.incotermLabel" description="blog.incomtermDescription"/>
  </WrapperStyled>
)

export default Blog
