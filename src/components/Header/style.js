import styled from 'styled-components';

export const AreaHeader = styled.div`
font-size:10px;
height:100px;
width:100%;
background-color:#D2691E;

.container{
  padding: 5px 40px;
  display:flex;
  align-items:center;
}


img{
  flex:1;
}

.menu{
  list-style:none;
  

  float:left;
  }

  .menu li{
    position:relative;
    float:left;
    border-right:1px 2px 3px #fff;
    font-size:28px;
    
    }

    .menu li a{color:#000000; text-decoration:none; padding:5px 10px; display:block;
      
}

.menu li a:hover{
color:#fff;
text-shadow:0px 0px 5px #fff;
transition: 0.5s;
}

.menu li  ul{
  position:absolute;
  top:25px;
  left:0;
  background-color:#C0C0C0		;
  display:none;
  margin-top:20px;
 
  }

  .menu li:hover ul, .menu li.over ul{display:block;}

  .menu li ul li{

    display:block;
    height: 100px;
    width:130px;
    margin-top:20px;

    }

`
