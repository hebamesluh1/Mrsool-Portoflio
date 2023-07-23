import styled from 'styled-components'

export const Wrapper = styled.div`
text-align:center;
padding-top:40px;
h2{
    font-size: 48px;
    font-weight: 500;
}
h3{
    font-size: 48px;
    font-weight: 500;
    color:#00BF6F;
}
h5{
    font-size:1.5rem;
    font-weight: 400;
    width:70%;
    margin:20px auto;
}
.Journey{
    padding:70px 0;
    border-bottom:1px solid #eee;
}
.content{
    display:flex;
    justify-content:center;
    gap:50px;
    margin-top:50px;
    img{
        width:350px;
    }
    p{
        font-size: 16px;
        color: #000;
        margin-bottom: 1rem;
    }
    span{
        color:#00BF6F;
    }
    .paragraph{
        width:50%;
        text-align:left;
    }
    
}
.about{
    display:flex;
    justify-content:center;
    gap:20px;
    text-align:left;
    border-bottom:1px solid #eee;
    margin:80px 0;
    h5{
        font-size: 2rem;
        font-weight: 500;
        text-align:left;
        margin: 0;
    }
    p{
        line-height: 1.5;
        font-size:16px;
        padding-bottom:20px;
    }
}
.contentOfAbout{
    flex-basis: 50%;
}
`