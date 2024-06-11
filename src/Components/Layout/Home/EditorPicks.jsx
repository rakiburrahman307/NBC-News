import { IoIosStar } from "react-icons/io";
import "./style.css";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

const EditorPicks = ({ newsData }) => {
  return (
    <section className='my-10 max-w-[1366px]'>
      <div className='flex items-center gap-3 px-3 md:px-0'>
        <h2 className='font-semibold text-[#2A2A2A]'>Editor&apos;s Picks</h2>
        <IoIosStar size={20} />
      </div>
      <div>
        <Carousel newsData={newsData}></Carousel>
      </div>
    </section>
  );
};
EditorPicks.propTypes = {
  newsData: PropTypes.array,
};
export default EditorPicks;
