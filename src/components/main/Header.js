import React, { useState, useContext, useEffect } from "react";
import logo from "../../images/real logo.png";
import logotwo from "../../images/Transparent PNG-011.png";
import "../../App.css";
import { context } from "../../Context";
import { useNavigate } from "react-router-dom";

import {
  MdKeyboardArrowDown,
  MdOutlineWbSunny,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header(props) {
  const { sunmoon, handleSun, handleMoon } = props;
  // Add a state to handle the visibility of the categories dropdown
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const navigate = useNavigate();
  // Function to toggle the visibility of the categories dropdown
  const handleCategoriesToggle = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  const categoryMenu = [
    {
      title: "Business Insights",
      subcategories: [
        "Industry Insights",
        "Entrepreneurship",
        "Leadership & Management",
        "Global Economy",
        "Corporate Responsibility",
      ],
    },
    {
      title: "Technology Trends",
      subcategories: [
        "Technology & Innovation",
        "Blockchain & Cryptocurrency",
        "Artificial Intelligence & Machine Learning",
      ],
    },
    {
      title: "Marketing & Finance",
      subcategories: ["Marketing & Advertising", "Finance & Investment"],
    },
    {
      title: "Workplace & Culture",
      subcategories: [
        "Human Resources",
        "Diversity & Inclusion",
        "Career Development",
      ],
    },
    {
      title: "Productivity & Innovation",
      subcategories: ["Productivity & Tools", "Innovation Implementation"],
    },
    {
      title: "Multimedia & Events",
      subcategories: ["Events & Conferences", "Multimedia Content"],
    },
    {
      title: "Opinions & Editorials",
      subcategories: ["Opinion & Editorial"],
    },
  ];
  const [ispages, setisPage] = useState(false);

  const created = useContext(context);
  let { client } = created;
  const handleisPage = () => {
    if (!ispages) {
      setisPage(true);
    } else {
      setisPage(false);
    }
  };
  // useEffect(()=>{
  // if(sunmoon){
  //     document.body.classList.add('background-black');
  // }else{
  //     document.body.classList.add('background-white');
  // }
  // },[]);
  let original = window.location.origin;

  const handleCateLink = (title) => {
    window.location.href = `${original}/category-list/${title}`;
  };
  const [islist, setislist] = useState(false);
  const [wordlist, setwordlist] = useState("");
  const [listdata, setlistdata] = useState([]);

  const fetch = async () => {
    let data = await client.getEntries({
      content_type: "currentstories", // Replace with your content type ID
      query: wordlist,
      limit: 4,
    });
    console.log(data);
    const newData = await Promise.all(
      data?.items.map(async (item) => {
        let datax = await client.getEntry(item.sys.id);
        //console.log(datax.item)

        return {
          heading: item.fields.storyId.fields.heading,

          // summary: item.fields.storyId.fields.summary,
          // thumbnail:item.fields.storyId.fields.thumbnail.fields.file.url,
          // category: answer,
          // writer:answriter,
          id: datax.sys.id,
          // timez:formattedDate
        };
      })
    );

    setlistdata((listdata) => newData);
  };

  useEffect(() => {
    fetch();
  }, [wordlist]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setwordlist(e.target.value);

      setislist(true);
    } else {
      setwordlist("");
      setislist(false);
    }
  };

  const handleClick = (id) => {
    navigate(`/story/${id}`);
  };
  return (
    <div className=" md:w-full md:flex md:flex-col md:items-center md:justify-center md:p-2 md:headerall lg:w-full lg:flex lg:items-center lg:justify-center lg:p-2 headerall">
      {/* large screen  */}
      <article
        className={
          !sunmoon
            ? "hidden sm:hidden md:hidden lg:w-11/12  lg:flex lg:flex-row lg:items-center lg:justify-between  lg:border-b lg:border-gray-100 lg:p-6"
            : "hidden sm:hidden md:hidden lg:w-11/12  lg:flex lg:flex-row lg:items-center lg:justify-between  lg:border-b lg:border-white lg:p-6"
        }
      >
        {/* logo and links */}
        <section className="w-1/2">
          <div className="w-full flex flex-row items-center justify-between">
            <span className="w-1/5  ">
              <Link to="/">
                <img
                  src={!sunmoon ? logo : logotwo}
                  className="w-full h-full"
                />
              </Link>
            </span>

            <span className="w-3/4">
              <ul className="w-full flex flex-row items-center  space-x-4">
                <li>
                  <span className="flex flex-row space-x-1 relative">
                    <a
                      onClick={() => handleCategoriesToggle()}
                      className=" font-normal capitalize text-base cursor-pointer"
                    >
                      Catagories
                    </a>
                    <a
                      onClick={() => handleCategoriesToggle()}
                      className="grid place-content-center"
                    >
                      <MdKeyboardArrowDown className="text-base" />
                    </a>
                    <ul
                      className={
                        isCategoriesOpen
                          ? "mega-menu grid grid-flow-col auto-cols-max grid-rows-4 gap-4 rounded-sm bg-white top-7 absolute items-start ease-in-out duration-300 shadow-md z-20 p-4"
                          : "h-0 hidden ease-in-out duration-300 z-0"
                      }
                    >
                      {categoryMenu.map((category, index) => (
                        <li key={index} className="mb-4">
                          <a
                            onClick={() => handleCateLink(category.title)}
                            className="flex items-center font-bold text-md text-black hover:underline hover:text-orange-500 transition-colors"
                          >
                            {category.title}
                            {category.subcategories &&
                              category.subcategories.length > 0 && (
                                <FaChevronDown className="ml-1" />
                              )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
               
                <li>
                  <span className="flex flex-row space-x-1">
                    <a className=" font-normal capitalize text-base">
                      <Link to="/contact us">Contact us</Link>
                    </a>
                  </span>
                </li>
                <li>
                  <span className="flex flex-row space-x-1">
                    <a className=" font-normal capitalize text-base">
                      <Link to="/about us">About us</Link>
                    </a>
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </section>
        {/* logo and links */}

        {/* search bar and toogle */}
        <section className="w-2/5 relative">
          <div className="w-full flex flex-row items-center space-x-5">
            <article
              className={
                !sunmoon
                  ? "w-2/3 bg-gray-100 rounded-md px-1 py-1 relative"
                  : "w-2/3 bg-black rounded-md px-1 py-1 relative"
              }
            >
              <div className="w-full flex flex-row items-center space-x-1">
                <a className="w-1/12 grid place-content-center">
                  
                </a>
                <span className="w-10/12">
                  <input
                    type="text"
                    value={wordlist}
                    onChange={(e) => handleSearch(e)}
                    className="w-full h-full bg-[#F5F5F5] outline-none border-0 p-1"
                  />
                </span>
                <a className="w-1/12 grid place-content-center">
                  <FaSearch className="w-full h-full text-sm" />
                </a>
              </div>

              <div
                className={
                  !sunmoon
                    ? "w-full absolute text-black z-10 top-12 bg-white"
                    : "w-full absolute text-white z-10 top-12 bg-black"
                }
              >
                {islist == true ? (
                  <ul className="w-full flex flex-col items-center">
                    {listdata.length > 0
                      ? listdata.map((item, index) => {
                          return (
                            <li
                              className={
                                !sunmoon
                                  ? "px-2 text-left font-semibold text-sm border border-b-black py-1 cursor-pointer"
                                  : "px-2 text-left font-semibold text-sm border border-b-white py-1 cursor-pointer"
                              }
                              onClick={() => handleClick(item.id)}
                              key={index}
                            >
                              {item.heading}
                            </li>
                          );
                        })
                      : []}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </article>

            <div
              onClick={(e) => handleSun(e)}
              className={
                !sunmoon
                  ? "w-1/6 border-2  border-black relative rounded-full change"
                  : "w-1/6 border-2 border-white relative rounded-full changex"
              }
            >
              <article className="w-full flex flex-row items-center  justify-between relative p-1 ">
                <button className="w-1/3 h-full ">
                  <MdOutlineWbSunny
                    className={
                      sunmoon
                        ? "w-full h-full text-2xl text-white"
                        : "w-full h-full text-2xl text-black"
                    }
                  />
                </button>
                <button
                  onClick={(e) => handleSun(e)}
                  className={
                    !sunmoon
                      ? "rounded-full w-6 h-6 circle"
                      : "rounded-full w-6 h-6 circlex"
                  }
                ></button>

                <button className="w-1/3 h-full ">
                  <BsMoon
                    className={
                      !sunmoon
                        ? "w-full h-full text-2xl text-black"
                        : "w-full h-full text-2xl text-white"
                    }
                  />
                </button>
              </article>
            </div>
          </div>
        </section>
        {/* search bar and toogle */}
      </article>
      {/* large screen  */}

      {/*tablet screen  */}
      <section className="hidden sm:hidden md:w-10/12 md:block lg:hidden">
        <div className="w-full flex flex-row items-center justify-between">
          <article className=" w-1/3 flex flex-row items-center  space-x-6">
            {/* <a className="w-8 h-8 rounded-sm bg-gray-300 grid place-content-center ">
              <GiHamburgerMenu className=" text-2xl text-black" />
            </a> */}

            <span className="h-10 w-24">
              <img src={!sunmoon ? logo : logotwo} className="w-full h-full" />
            </span>
          </article>
          
          <article
            className={
              sunmoon
                ? "w-1/6 flex flex-row items-center border border-white  rounded-full justify-between relative p-1"
                : "w-1/6 flex flex-row items-center border border-black  rounded-full justify-between relative p-1"
            }
          >
            <button className="w-1/3 h-full ">
              <MdOutlineWbSunny
                className={
                  sunmoon
                    ? "w-full h-full text-2xl text-white"
                    : "w-full h-full text-2xl text-black"
                }
              />
            </button>
            <button
              onClick={(e) => handleSun(e)}
              className={
                !sunmoon
                  ? "rounded-full w-10 h-10 circle"
                  : "rounded-full w-10 h-10 circlex"
              }
            ></button>

            <button className="w-1/3 h-full ">
              <BsMoon
                className={
                  !sunmoon
                    ? "w-full h-full text-2xl text-black"
                    : "w-full h-full text-2xl text-white"
                }
              />
            </button>
          </article>
        </div>
      </section>

      <article
        className={
          !sunmoon
            ? "hidden sm:hidden md:w-10/12 md:bg-[#F5F5F5] md:rounded-md md:px-1 md:py-1 md:mt-2 lg:hidden"
            : "hidden sm:hidden md:w-10/12 md:bg-black md:rounded-md md:px-1 md:py-1 md:mt-2 lg:hidden"
        }
      >
        <div className="w-full flex flex-row items-center space-x-1">
          <a className="w-1/12 grid place-content-center">
            
          </a>
          <span className="w-10/12">
            <input
              type="text"
              className="w-full h-full bg-[#F5F5F5] outline-none border-0 p-1"
            />
          </span>
          <a className="w-24 grid place-content-center">
            <FaSearch className="w-full h-full text-sm" />
          </a>
        </div>
      </article>
      {/* tablet screen */}

      {/* small screen */}
      <div className="w-10/12 m-auto pb-4 border-b justify-around border-gray-200 mt-4 sm:w-10/12 sm:m-auto md:hidden lg:hidden">
        <section className="w-full flex flex-row items-center justify-between">
          <span className="w-35">
            <img src={!sunmoon ? logo : logotwo} className="h-10 w-30" />
          </span>

          <span className="w-1/3 ">
            <article className="w-full flex flex-row items-center justify-end">
              <a className="w-4 hidden sm:hidden md:hidden lg:block">
                <FaSearch className="w-full h-full text-sm" />
              </a>

              <div
                onClick={(e) => handleSun(e)}
                className={
                  !sunmoon
                    ? "w-auto border-2  border-black relative rounded-full change"
                    : "w-auto border-2 border-white relative rounded-full changex"
                }
              >
                <article className="w-full flex flex-row items-center  justify-between relative p-1 ">
                  <button className="w-1/3 h-auto ">
                    <MdOutlineWbSunny
                      className={
                        sunmoon
                          ? "w-full h-full text-2xl text-white"
                          : "w-full h-full text-2xl text-black"
                      }
                    />
                  </button>
                  <button
                    onClick={(e) => handleSun(e)}
                    className={
                      !sunmoon
                        ? "rounded-full w-6 h-6 circle"
                        : "rounded-full w-6 h-6 circlex"
                    }
                  ></button>

                  <button className="w-1/3 h-full ">
                    <BsMoon
                      className={
                        !sunmoon
                          ? "w-full h-full text-2xl text-black"
                          : "w-full h-full text-2xl text-white"
                      }
                    />
                  </button>
                </article>
              </div>
            </article>
          </span>
        </section>
      </div>

      {/* small screen */}

      {/* slide bar */}
      <article className="hidden  sm:hidden md:w-full md:fixed md:top-0 md:bottom-0 md:left-0 lg:hidden">
        <div className="w-1/2 bg-white h-screen py-5">
          <article className="w-11/12 m-auto flex flex-row items-center justify-between px-2">
            <span>
              <span>
                <img src={!sunmoon ? logo : logotwo} className="h-10 w-30" />
              </span>
            </span>

            <span className="w-8 h-8 rounded-sm bg-gray-300 grid place-content-center capitalize font-semibold text-black float-right">
              x
            </span>
          </article>
          <section className="w-11/12">
            <ul className="w-full flex flex-col items-center mt-10">
              <li className="w-full flex flex-col items-center py-2 px-2">
                <section className="w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3  hover:bg-gray-200 hover:rounded-md">
                  <span className="w-2/3 text-2xl hover:border-l-4 hover:border-[#FD9005] px-2">
                    Category
                  </span>
                  <span className="w-1/12">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </span>
                </section>
              </li>

              <li className="w-full flex flex-col items-center py-2 px-2">
                <section
                  className="w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3 hover:bg-gray-200 hover:rounded-md"
                  onClick={() => handleisPage()}
                >
                  <span className="w-2/3 text-2xl  hover:border-l-4 hover:border-[#FD9005] px-2">
                    Page
                  </span>
                  <span className="w-1/12">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </span>
                </section>

                <article className="w-3/4">
                  <ul
                    className={
                      ispages
                        ? "w-full bg-white  flex flex-col items-center ease-in-out duration-300 "
                        : "h-0 hidden ease-in-out duration-300 z-0"
                    }
                  >
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/">Home</Link>{" "}
                    </li>
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/story">story</Link>
                    </li>
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/about us">about us</Link>
                    </li>
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/team">team</Link>
                    </li>
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/video-category">video category</Link>
                    </li>
                    <li className="w-full p-1 text-sm text-left font-medium capitalize text-black">
                      <Link to="/contact us">contact us</Link>
                    </li>
                  </ul>
                </article>
              </li>

              <li className="w-full flex flex-col items-center py-2 px-2">
                <section className="w-11/12 m-auto flex flex-row items-center justify-between py-3 px-3   hover:bg-gray-200 hover:rounded-md">
                  <span className="w-2/3 text-2xl  hover:border-l-4 hover:border-[#FD9005] px-2">
                    About us
                  </span>
                  <span className="w-1/12">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </span>
                </section>
              </li>
            </ul>
          </section>
        </div>
      </article>
      {/* slide bar */}
    </div>
  );
}
