import React, { Component, useEffect, useState }  from "react";
import headerStyles  from "./header.module.css";


const Header = (props) => {

  const menuItems = [
    {link: "#aboutme", name: "About Me"},
    {link: "#skills", name: "Skills"},
    {link: "#education", name: "Education"},
    {link: "#workexperience", name: "Work Experience"},
    {link: "#projects", name: "Personal Projects"},
    {link: "#socials", name: "Socials"}
  ]
  const [display_name, setName] = useState("");
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  const name = "Syed Ali"

  useEffect(() => {
    const id = setInterval(() => {
      if (i === name.length) {
        return;
      } else {
        setName(display_name.concat(name[i]));
        setI(i + 1);
      }
    }, 100);
    return () => clearInterval(id);
  }, [i, display_name, visible]);
  
  useEffect(() => {
    const cursorid = setInterval(() => {
      if(visible)
        setVisible(false);
      else
        setVisible(true);
    }, 700);
    return () => clearInterval(cursorid);
  }, [visible]);


  return (
    <div className={headerStyles.container}>
      <header className={headerStyles.header}>
        <h1 className={headerStyles.headername}>{"> " + display_name}<span className={visible ? headerStyles.cursor : headerStyles.cursorhidden }>|</span></h1>
        <ul className={headerStyles.headerlinks}>
        { menuItems.map(item => (
          <li key={item.name} className={headerStyles.headerlink}>
          <a href={item.link}>
            {item.name}
          </a>
          </li>
        ))}
        </ul>
      </header>
    </div>
  )
}

export default Header;

// export default class Header extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       menuItems: [
//         {link: "#personalstatement", name: "Personal Statement"},
//         {link: "#skills", name: "Skills"},
//         {link: "#education", name: "Education"},
//         {link: "#workexperience", name: "Work Experience"},
//         {link: "#projects", name: "Personal Projects"},
//         {link: "#socials", name: "Socials"}
//       ],
//       name: "Syed Ali",
//       display_name: "",
//       i: 0,
//     }
//   }


//   componentDidMount(){
//     this.id = setInterval(
//       () => this.frame(),
//       300
//     )
//   }


//   frame = () => {
//     if (this.state.i === this.state.name.length) {
//       clearInterval(this.state.id);
//     } else {
//       /* code to change the element style */ 
//       this.setState({
//         display_name: this.state.display_name + this.state.name[this.state.i],
//         i: this.state.i + 1
//       })
//       console.log(this.state.display_name);
//     }
//   }
  
//   render()
//   {return(
//     <header className={headerStyles.header}>
//     <h1 className={headerStyles.headername}>{ "> " +  this.state.display_name}</h1>
//     <ul className={headerStyles.headerlinks}>
//     { this.state.menuItems.map(item => (
//       <li key={item.name} className={headerStyles.headerlink}>
//       <a href={item.link}>
//         {item.name}
//       </a>
//       </li>
//     ))}
//     </ul>
//   </header>
//   )
//   }
// }