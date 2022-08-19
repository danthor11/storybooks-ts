import React from 'react'
import "./myLabel.css"

interface Props {
  /**
   *  This is the text that contain the component
   */
  label: string,

  /**
   * This is the size of the component
   */
  size: "normal" | "h1" | "h2" | "h3",
  /**
   * if you want all text capitalized
   */
  allCaps?: boolean,
  /**
   * Basic colors
   */
  color?: "primary" | "secondary" | "tertiary"
  /**
   * Custom font's color
   */

  fontColor?: string


  /**
   *  Background color
   */
  backgroundColor: string
}

export const MyLabel = ({
  allCaps = false,
  backgroundColor = "transparent",
  color = "primary",
  fontColor,
  label = "No Label",
  size = "normal"
}: Props) => {
  return (
    <span 
      className={`label ${size} text-${color}`}
      style={{color:fontColor, backgroundColor}}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
