import styled from 'styled-components'

export const Box= styled.div`
min-height: 390px;
border-radius: 10px;
border: unset;
box-shadow: 0 16px 32px rgba(0, 0, 0, .20);
margin-left: 0 30px;
padding:20px;
text-align:left;
position:relative;
background-color:#fff;

.qoutes{
    font-size: 36px;
    color: #969FA4;
}
.body{
    width:300px;
}
.footer{
    position:absolute;
    bottom:0;
    padding:20px 0;
    border-top: 1px solid rgba(0, 0, 0, .05);
    display:flex;
    flex-direction:column;
    img{
        width:100px;
    }

}
`