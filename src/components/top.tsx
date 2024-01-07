import styles from "@/styles/top.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import PageTabs from "@/types/e-page-tabs";
import PageNestedTabs from "@/types/e-page-nested-tabs";

interface ITabMenu {
  href: string;
  text: string;
}

const Top = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const router = useRouter();

  const tabs: ITabMenu[] = [
    { href: `/${PageTabs.home}`, text: "Home" },
    { href: `/${PageTabs.courses}/${PageNestedTabs.arbitrator}`, text: "Courses" },
    { href: `/${PageTabs.events}`, text: "Events" },
    { href: `/${PageTabs.testimonials}`, text: "Testimonials" },
    { href: `/${PageTabs.blog}`, text: "Blog" },
    { href: `/${PageTabs.about}`, text: "About" },
    { href: `/${PageTabs.contact}`, text: "Contact" },
    { href: `/${PageTabs.quiz}`, text: "Quiz" },
  ];

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);
  };

  const handleNavItemClick = (href: string) => {
    setNavExpanded(false);
    router.push(href);
  };

  const elemTabs = tabs.map((it, i) => (
    <a key={i} onClick={() => handleNavItemClick(it.href)} className="nav-link">
      {it.text}
    </a>
  ));

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">Nathan Krasney</h1>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="responsive-navbar-nav"
          aria-expanded={navExpanded ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navExpanded ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">{elemTabs}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Top;




// import { useState } from "react";
// import styles from "@/styles/top.module.css";
// import { Navbar, Nav } from "react-bootstrap";
// import Link from "next/link";
// import PageTabs from "@/types/e-page-tabs";
// import PageNestedTabs from "@/types/e-page-nested-tabs";

// interface ITabMenu {
//   href: string;
//   text: string;
// }

// const Top = () => {
//   const [navExpended, setNavExpended] = useState(false);

//   const tabs: ITabMenu[] = [
//     { href: `/${PageTabs.home}`, text: "Home" },
//     {
//       href: `/${PageTabs.courses}/${PageNestedTabs.arbitrator}`,
//       text: "Courses",
//     },
//     { href: `/${PageTabs.events}`, text: "Events" },
//     { href: `/${PageTabs.testimonials}`, text: "Testimonials" },
//     { href: `/${PageTabs.blog}`, text: "Blog" },
//     { href: `/${PageTabs.about}`, text: "About" },
//     { href: `/${PageTabs.contact}`, text: "Contact" },
//     { href: `/${PageTabs.quiz}`, text: "Quiz" },
//   ];
//   const elemTabs = tabs.map((it, i) => (
//     <Link
//       key={i}
//       href={it.href}
//       onClick={() => setNavExpended(false)}
//       className={styles.navigationLink}
//     >
//       {it.text}
//     </Link>
//   ));

//   return (
//     <div className={styles.Top}>
//       <header className={styles.header}>
//         <Navbar
//           expanded={navExpended}
//           collapseOnSelect
//           expand="xl"
//           variant="dark"
//         >
//           <Navbar.Brand>
//             <h1>
//               <span className={styles.nameColor}>Nathan</span> Krasney
//             </h1>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => setNavExpended(navExpended ? false : true)}
//           />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto"></Nav>
//             <Nav>{elemTabs}</Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </header>
//     </div>
//   );
// };

// export default Top;
