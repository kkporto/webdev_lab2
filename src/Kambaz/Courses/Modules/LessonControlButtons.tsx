import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}


export function ModuleControlButtons() {
  return (
    <div className="float-end">
      {/* <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" /> */}
      <BsPlus className="bs" />
    </div> );}