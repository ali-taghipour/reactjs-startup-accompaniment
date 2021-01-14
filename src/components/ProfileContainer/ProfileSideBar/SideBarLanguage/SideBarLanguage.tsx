import React from "react"

import Styles from "./SideBarLanguage.module.css"

const languages = [
  "فارسی | Persian",
  "انگلیسی | English",
  "فرانسه | French",
  "ایتالیایی | Italian",
  "عربی | Arabic",
  "اسپانیایی | Spanish",
  "روسی | Russian",
]

type props = {
  languageId1: number
  languageId2: number
  languageId3: number
}

const SideBarLanguage: React.FC<props> = ({
  languageId1,
  languageId2,
  languageId3,
}) => {
  return (
    <>
      {languageId1 !== 0 && languageId2 !== 0 && languageId3 !== 0 && (
        <div className={Styles.userInfoSidebar}>
          <h5 className="rtl">
            زبان ها :
            <br />
            {languages[languageId1]}
            <br />
            {languages[languageId2]}
            <br />
            {languages[languageId3]}
          </h5>
        </div>
      )}
    </>
  )
}

export { SideBarLanguage }
