import React from 'react'

interface PropLogo{
    fillColor: string,
    className:string
}

const LogoSvg:React.FC<PropLogo>  = ({fillColor, className}) => {
  return (
      <div className={className}>
          <svg
              width="212"
              height="45"
              viewBox="0 0 212 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M4.9375 20.9531C5.125 21.2969 5.3125 21.625 5.5 21.9375C5.6875 22.25 5.84375 22.5312 5.96875 22.7812C6.5 23.7188 7.03125 24.6406 7.5625 25.5469C8 26.3281 8.46875 27.1406 8.96875 27.9844C9.46875 28.7969 9.90625 29.5 10.2812 30.0938C10.125 30.2188 9.92188 30.3125 9.67188 30.375C9.42188 30.4062 9.17188 30.4375 8.92188 30.4688C8.60938 30.5 8.28125 30.5156 7.9375 30.5156C7.15625 30.5156 6.64062 30.4688 6.39062 30.375C6.14062 30.2812 5.9375 30.0938 5.78125 29.8125C5.75 29.75 5.5625 29.4375 5.21875 28.875C4.875 28.3125 4.46875 27.625 4 26.8125C3.53125 26 3.01562 25.1094 2.45312 24.1406C1.92188 23.1406 1.42188 22.1875 0.953125 21.2812C0.890625 21.125 0.8125 20.9531 0.71875 20.7656C0.59375 20.5781 0.53125 20.4219 0.53125 20.2969C0.53125 20.2656 0.5625 20.2031 0.625 20.1094C0.71875 19.9844 0.9375 19.7656 1.28125 19.4531L9.48438 12.5156C9.70312 12.3281 9.92188 12.1719 10.1406 12.0469C10.3594 11.9219 10.6094 11.8125 10.8906 11.7188C11.1719 11.5938 11.5 11.5 11.875 11.4375C12.2812 11.3438 12.7812 11.2656 13.375 11.2031C13.875 11.1406 14.2656 11.125 14.5469 11.1562C14.8281 11.1562 15.0312 11.1875 15.1562 11.25C15.3125 11.2812 15.3906 11.3281 15.3906 11.3906C15.4219 11.4531 15.4219 11.5 15.3906 11.5312C15.2344 11.6875 14.7969 12.0781 14.0781 12.7031C13.3906 13.2969 12.5469 14.0312 11.5469 14.9062C10.5781 15.7812 9.5 16.75 8.3125 17.8125C7.15625 18.875 6.03125 19.9219 4.9375 20.9531ZM27.6719 42.0469C27.3906 41.8594 27.25 41.6562 27.25 41.4375C27.2188 41.2188 27.2656 41 27.3906 40.7812C27.5156 40.5312 27.7031 40.2812 27.9531 40.0312C28.2031 39.8125 28.5 39.25 28.8438 38.3438C29.1875 37.4688 29.5469 36.4062 29.9219 35.1562C30.3281 33.875 30.7188 32.4844 31.0938 30.9844C31.5 29.4844 31.875 28.0156 32.2188 26.5781C32.5625 25.1406 32.8594 23.8125 33.1094 22.5938C33.3594 21.375 33.5469 20.4062 33.6719 19.6875C33.8281 18.8125 34 17.8594 34.1875 16.8281C34.3438 15.9219 34.5156 14.875 34.7031 13.6875C34.8906 12.4688 35.0625 11.125 35.2188 9.65625L38.9688 7.96875C39.5 7.71875 39.875 7.78125 40.0938 8.15625C40.3125 8.5 40.3125 9.23438 40.0938 10.3594C40 10.9219 39.8281 11.8438 39.5781 13.125C39.3281 14.375 39.0312 15.7656 38.6875 17.2969C38.375 18.7969 38.0312 20.3438 37.6562 21.9375C37.3125 23.5 36.9688 24.8906 36.625 26.1094C36.3125 27.2656 35.9531 28.5938 35.5469 30.0938C34.8281 32.6562 33.8281 36.1562 32.5469 40.5938C32.9844 41.3438 33.7969 41.7188 34.9844 41.7188C36.2969 41.7188 37.8125 41.2188 39.5312 40.2188C41.2812 39.2188 42.9688 37.7188 44.5938 35.7188C46.2188 33.7188 47.6406 31.2188 48.8594 28.2188C50.1094 25.1875 50.8906 21.6562 51.2031 17.625C51.3594 15.4375 51.25 13.5156 50.875 11.8594C50.5 10.2031 49.9219 8.8125 49.1406 7.6875C48.3906 6.5625 47.4531 5.71875 46.3281 5.15625C45.2344 4.59375 44.0156 4.3125 42.6719 4.3125C39.5156 4.3125 36.25 5.625 32.875 8.25L32.6406 4.35938C33.4531 3.45312 34.375 2.76562 35.4062 2.29688C36.4688 1.79688 37.4531 1.42188 38.3594 1.17188C39.4219 0.890625 40.5 0.734375 41.5938 0.703125C43.5938 0.703125 45.5156 1.09375 47.3594 1.875C49.2344 2.625 50.8438 3.78125 52.1875 5.34375C53.5625 6.90625 54.6094 8.875 55.3281 11.25C56.0469 13.5938 56.2969 16.3438 56.0781 19.5C55.9531 21.3125 55.5781 23.2031 54.9531 25.1719C54.3594 27.1094 53.5625 29.0156 52.5625 30.8906C51.5938 32.7656 50.4375 34.5469 49.0938 36.2344C47.75 37.9219 46.2812 39.3906 44.6875 40.6406C43.0938 41.9219 41.3906 42.9219 39.5781 43.6406C37.7656 44.3906 35.8906 44.7656 33.9531 44.7656C33.3594 44.7344 32.7188 44.625 32.0312 44.4375C31.4375 44.2812 30.7656 44.0156 30.0156 43.6406C29.2656 43.2656 28.4844 42.7344 27.6719 42.0469ZM81.9062 26.6719C81.4688 27.2969 80.9062 28.0781 80.2188 29.0156C79.5312 29.9219 78.8125 30.8438 78.0625 31.7812C77.3438 32.6875 76.625 33.5312 75.9062 34.3125C75.2188 35.0625 74.6406 35.5938 74.1719 35.9062C73.8594 36.0938 73.5 36.25 73.0938 36.375C72.6875 36.5 72.2656 36.5781 71.8281 36.6094C71.4219 36.6406 71.0312 36.6094 70.6562 36.5156C70.2812 36.4531 69.9531 36.3281 69.6719 36.1406C69.3906 35.9219 69.1562 35.6094 68.9688 35.2031C68.8125 34.8594 68.6562 34.4062 68.5 33.8438C68.375 33.2812 68.3281 32.5781 68.3594 31.7344C67.6094 32.9844 66.7812 33.9531 65.875 34.6406C64.9688 35.2969 64.1094 35.7812 63.2969 36.0938C62.3594 36.4375 61.4219 36.6406 60.4844 36.7031C60.0469 36.7031 59.5781 36.5469 59.0781 36.2344C58.5781 35.9531 58.1562 35.5 57.8125 34.875C57.4688 34.2188 57.25 33.3906 57.1562 32.3906C57.0625 31.3594 57.1875 30.1406 57.5312 28.7344C57.9688 26.8281 58.6562 25.0938 59.5938 23.5312C60.5625 21.9688 61.6094 20.6406 62.7344 19.5469C63.8594 18.4219 64.9688 17.5781 66.0625 17.0156C67.1562 16.4531 68.0625 16.2031 68.7812 16.2656C69.625 16.4219 70.3125 16.6719 70.8438 17.0156C71.2812 17.3281 71.5625 17.7969 71.6875 18.4219C71.8438 19.0156 71.5938 19.8125 70.9375 20.8125C71.375 20.7188 71.7344 20.6562 72.0156 20.625C72.3281 20.5938 72.5625 20.5781 72.7188 20.5781C72.9062 20.5781 73.0312 20.5938 73.0938 20.625C73.125 20.6875 73.1406 20.8281 73.1406 21.0469C73.1406 21.2344 73.0938 21.5938 73 22.125C72.9062 22.6562 72.7656 23.375 72.5781 24.2812C72.3906 25.1875 72.1406 26.3594 71.8281 27.7969C71.7656 28.0781 71.7031 28.3438 71.6406 28.5938C71.6094 28.8125 71.5625 29.0469 71.5 29.2969C71.4688 29.5156 71.4219 29.7812 71.3594 30.0938C71.2969 30.4062 71.2188 30.7969 71.125 31.2656C71.0938 31.5469 71.0781 31.8594 71.0781 32.2031C71.1094 32.5156 71.1719 32.8125 71.2656 33.0938C71.3594 33.375 71.5 33.6094 71.6875 33.7969C71.9062 33.9531 72.2031 34.0312 72.5781 34.0312C72.8906 34.0312 73.2969 33.8438 73.7969 33.4688C74.2969 33.0625 74.8281 32.5625 75.3906 31.9688C75.9531 31.3438 76.5312 30.6719 77.125 29.9531C77.75 29.2031 78.3281 28.4844 78.8594 27.7969C79.3906 27.1094 79.8594 26.5 80.2656 25.9688C80.7031 25.4375 81.0156 25.0469 81.2031 24.7969C81.4531 24.5156 81.7031 24.3594 81.9531 24.3281C82.2031 24.2656 82.3906 24.3281 82.5156 24.5156C82.6406 24.7031 82.6562 24.9844 82.5625 25.3594C82.5 25.7344 82.2812 26.1719 81.9062 26.6719ZM68.1719 28.7344C68.3281 28.1094 68.5156 27.375 68.7344 26.5312C68.9531 25.6875 69.1406 24.875 69.2969 24.0938C69.4531 23.3125 69.5625 22.6719 69.625 22.1719C69.7188 21.6406 69.7031 21.3906 69.5781 21.4219C69.4219 21.4531 69.25 21.5 69.0625 21.5625C68.9062 21.625 68.7031 21.6719 68.4531 21.7031C68.2031 21.7344 67.9531 21.7812 67.7031 21.8438C67.9531 21.3438 68.0938 20.9375 68.125 20.625C68.1875 20.2812 68.2031 20.0156 68.1719 19.8281C68.1406 19.6094 68.0781 19.4375 67.9844 19.3125C67.6406 19.0312 67.0312 19.2656 66.1562 20.0156C65.3125 20.7344 64.3281 22.0781 63.2031 24.0469C62.7344 24.8594 62.3594 25.7344 62.0781 26.6719C61.7969 27.5781 61.5938 28.4375 61.4688 29.25C61.375 30.0625 61.3594 30.7812 61.4219 31.4062C61.4844 32 61.6094 32.3906 61.7969 32.5781C62.1406 32.9219 62.5312 33.0938 62.9688 33.0938C63.4062 33.0625 63.8438 32.9375 64.2812 32.7188C64.75 32.4688 65.2031 32.1562 65.6406 31.7812C66.1094 31.4062 66.5156 31.0156 66.8594 30.6094C67.2344 30.2031 67.5312 29.8281 67.75 29.4844C68 29.1406 68.1406 28.8906 68.1719 28.7344ZM92.5 27.6562C91.6875 28.8438 90.8438 30 89.9688 31.125C89.125 32.25 88.2969 33.2656 87.4844 34.1719C86.7031 35.0469 85.9688 35.75 85.2812 36.2812C84.625 36.8438 84.0938 37.125 83.6875 37.125C82.7188 37.125 81.9219 36.6719 81.2969 35.7656C80.7031 34.8281 80.2344 33.6875 79.8906 32.3438C79.5781 30.9688 79.375 29.5156 79.2812 27.9844C79.2188 26.4219 79.2344 25.0312 79.3281 23.8125C79.4531 22.5938 79.5938 21.625 79.75 20.9062C79.9062 20.1562 80.0938 19.5781 80.3125 19.1719C80.5625 18.7656 80.8438 18.4688 81.1562 18.2812C81.5 18.0938 81.9219 17.9375 82.4219 17.8125C82.6406 17.75 82.8906 17.7031 83.1719 17.6719C83.4531 17.6406 83.7031 17.6562 83.9219 17.7188C84.1719 17.75 84.3594 17.8438 84.4844 18C84.6094 18.1562 84.625 18.3906 84.5312 18.7031C84.4688 18.9844 84.3594 19.4062 84.2031 19.9688C84.0781 20.5 83.9375 21.1094 83.7812 21.7969C83.625 22.4844 83.4688 23.2031 83.3125 23.9531C83.1875 24.7031 83.0938 25.4219 83.0312 26.1094C82.9375 27.2969 82.9375 28.3438 83.0312 29.25C83.125 30.125 83.2656 30.875 83.4531 31.5C83.6406 32.0938 83.8438 32.5469 84.0625 32.8594C84.2812 33.1719 84.4531 33.3281 84.5781 33.3281C84.7344 33.3281 85.0156 33.125 85.4219 32.7188C85.8594 32.2812 86.3438 31.7188 86.875 31.0312C87.4375 30.3438 88.0156 29.5469 88.6094 28.6406C89.2344 27.7344 89.8125 26.7969 90.3438 25.8281C90.1562 25.3281 90.0781 24.7344 90.1094 24.0469C90.2031 22.9844 90.4375 22.0312 90.8125 21.1875C91.1875 20.3125 91.6094 19.5781 92.0781 18.9844C92.5781 18.3906 93.0781 17.9375 93.5781 17.625C94.1094 17.2812 94.5781 17.1094 94.9844 17.1094C95.7969 17.1094 96.2969 17.3281 96.4844 17.7656C96.7031 18.1719 96.7812 18.5938 96.7188 19.0312C96.6562 19.6875 96.3594 20.5938 95.8281 21.75C95.3281 22.875 94.6719 24.1094 93.8594 25.4531C94.0156 25.5156 94.1875 25.5781 94.375 25.6406C94.5625 25.7031 94.7812 25.7344 95.0312 25.7344C96.0938 25.7344 97.0469 25.6094 97.8906 25.3594C98.7656 25.1094 99.5156 24.8125 100.141 24.4688C100.797 24.125 101.344 23.7656 101.781 23.3906C102.25 22.9844 102.625 22.6562 102.906 22.4062C103.094 22.2188 103.281 22.125 103.469 22.125C103.656 22.125 103.812 22.1719 103.938 22.2656C104.062 22.3594 104.125 22.5 104.125 22.6875C104.125 22.875 104.031 23.0781 103.844 23.2969C102.719 24.6719 101.344 25.7812 99.7188 26.625C98.125 27.4688 96.25 27.8906 94.0938 27.8906C93.9062 27.8906 93.6719 27.875 93.3906 27.8438C93.1094 27.8125 92.8125 27.75 92.5 27.6562ZM109.609 8.39062C109.516 8.73438 109.328 9.07812 109.047 9.42188C108.797 9.73438 108.5 10 108.156 10.2188C107.844 10.4062 107.516 10.5312 107.172 10.5938C106.828 10.6562 106.547 10.5938 106.328 10.4062C105.672 9.90625 105.328 9.375 105.297 8.8125C105.266 8.21875 105.406 7.67188 105.719 7.17188C106.031 6.64062 106.422 6.20313 106.891 5.85938C107.359 5.48438 107.766 5.26563 108.109 5.20312C108.453 5.14062 108.734 5.21875 108.953 5.4375C109.203 5.625 109.391 5.89062 109.516 6.23438C109.641 6.54687 109.703 6.90625 109.703 7.3125C109.734 7.71875 109.703 8.07812 109.609 8.39062ZM103.141 18.375C103.297 18.1875 103.594 18.0312 104.031 17.9062C104.469 17.7812 104.922 17.6875 105.391 17.625C105.859 17.5312 106.281 17.4844 106.656 17.4844C107.062 17.4531 107.297 17.4531 107.359 17.4844C107.391 17.5156 107.312 17.8438 107.125 18.4688C106.938 19.0938 106.703 19.8281 106.422 20.6719C106.141 21.5156 105.844 22.3906 105.531 23.2969C105.219 24.1719 104.984 24.8906 104.828 25.4531C104.672 26.0156 104.484 26.6562 104.266 27.375C104.047 28.0625 103.844 28.75 103.656 29.4375C103.5 30.0938 103.391 30.7188 103.328 31.3125C103.266 31.9062 103.312 32.3594 103.469 32.6719C103.625 33.0469 103.797 33.3125 103.984 33.4688C104.172 33.5938 104.375 33.6562 104.594 33.6562C105.219 33.6562 106 33.3125 106.938 32.625C107.906 31.9375 108.875 31.125 109.844 30.1875C110.844 29.2188 111.766 28.25 112.609 27.2812C113.453 26.2812 114.078 25.4844 114.484 24.8906C114.734 24.5781 114.984 24.375 115.234 24.2812C115.516 24.1875 115.734 24.2031 115.891 24.3281C116.078 24.4531 116.172 24.6562 116.172 24.9375C116.203 25.2188 116.109 25.5469 115.891 25.9219C115.391 26.7969 114.656 27.8438 113.688 29.0625C112.719 30.25 111.688 31.4062 110.594 32.5312C109.5 33.625 108.422 34.5625 107.359 35.3438C106.328 36.125 105.484 36.5312 104.828 36.5625C104.297 36.5938 103.766 36.5 103.234 36.2812C102.734 36.0938 102.266 35.8281 101.828 35.4844C101.422 35.1094 101.078 34.6875 100.797 34.2188C100.516 33.7188 100.359 33.2031 100.328 32.6719C100.234 31.8906 100.234 30.8281 100.328 29.4844C100.422 28.1094 100.594 26.7188 100.844 25.3125C101.094 23.875 101.406 22.5156 101.781 21.2344C102.188 19.9531 102.641 19 103.141 18.375ZM127.375 27.0469C127.219 28.0156 127.062 28.9375 126.906 29.8125C126.781 30.6875 126.703 31.3906 126.672 31.9219C126.641 32.7031 126.781 33.2656 127.094 33.6094C127.406 33.9531 127.75 34.125 128.125 34.125C128.562 34.125 129.094 33.9062 129.719 33.4688C130.375 33.0312 131.062 32.4844 131.781 31.8281C132.5 31.1719 133.219 30.4531 133.938 29.6719C134.656 28.8906 135.312 28.1562 135.906 27.4688C136.531 26.75 137.047 26.125 137.453 25.5938C137.891 25.0625 138.188 24.7188 138.344 24.5625C138.531 24.375 138.719 24.2656 138.906 24.2344C139.125 24.2031 139.297 24.2344 139.422 24.3281C139.547 24.4219 139.609 24.5938 139.609 24.8438C139.609 25.0938 139.484 25.4062 139.234 25.7812C138.859 26.375 138.375 27.0781 137.781 27.8906C137.188 28.6719 136.531 29.4844 135.812 30.3281C135.094 31.1719 134.328 32 133.516 32.8125C132.734 33.625 131.938 34.3438 131.125 34.9688C130.344 35.5938 129.578 36.0938 128.828 36.4688C128.109 36.875 127.453 37.0781 126.859 37.0781C126.422 37.0781 126 36.9531 125.594 36.7031C125.219 36.4531 124.875 36.125 124.562 35.7188C124.25 35.3125 124 34.8594 123.812 34.3594C123.656 33.8594 123.594 33.3594 123.625 32.8594C123.656 32.6406 123.703 32.2656 123.766 31.7344C122.453 33.2031 121.125 34.375 119.781 35.25C118.469 36.0938 117.203 36.5156 115.984 36.5156C115.547 36.5156 115.078 36.4062 114.578 36.1875C114.078 35.9688 113.625 35.6094 113.219 35.1094C112.844 34.6094 112.531 33.9531 112.281 33.1406C112.031 32.3281 111.938 31.3438 112 30.1875C112.094 28.375 112.453 26.6562 113.078 25.0312C113.703 23.4062 114.484 22 115.422 20.8125C116.391 19.5938 117.469 18.6406 118.656 17.9531C119.875 17.2344 121.094 16.875 122.312 16.875C122.844 16.875 123.328 17.0156 123.766 17.2969C124.203 17.5469 124.578 17.8906 124.891 18.3281C125.203 18.7344 125.453 19.1875 125.641 19.6875C125.859 20.1875 126.016 20.6562 126.109 21.0938C126.328 20.1875 126.531 19.2969 126.719 18.4219C126.906 17.5469 127.094 16.7188 127.281 15.9375C127.594 14.7812 127.922 13.5312 128.266 12.1875C128.578 11.0312 128.938 9.70312 129.344 8.20312C129.75 6.70312 130.203 5.125 130.703 3.46875C131.016 3.21875 131.312 3.03125 131.594 2.90625C131.875 2.78125 132.141 2.6875 132.391 2.625C132.672 2.53125 132.938 2.48438 133.188 2.48438C133.5 2.48438 133.781 2.53125 134.031 2.625C134.281 2.6875 134.484 2.89062 134.641 3.23438C134.828 3.54687 134.953 4.03125 135.016 4.6875C135.078 5.34375 135.078 6.23438 135.016 7.35938C134.953 8.73438 134.703 10.2344 134.266 11.8594C133.859 13.4844 133.312 15.1719 132.625 16.9219C131.938 18.6406 131.141 20.375 130.234 22.125C129.359 23.8438 128.406 25.4844 127.375 27.0469ZM124.609 27.6562C124.734 27.0625 124.844 26.4688 124.938 25.875C125.062 25.2812 125.203 24.6719 125.359 24.0469C125.297 24.0781 125.234 24.1094 125.172 24.1406C125.141 24.1719 125.094 24.2031 125.031 24.2344C124.688 24.3906 124.453 24.3906 124.328 24.2344C124.203 24.0469 124.141 23.7656 124.141 23.3906C124.141 23.2031 124.125 22.875 124.094 22.4062C124.062 21.9062 123.969 21.4062 123.812 20.9062C123.688 20.375 123.484 19.9219 123.203 19.5469C122.922 19.1406 122.531 18.9375 122.031 18.9375C121.312 18.9375 120.578 19.3125 119.828 20.0625C119.078 20.7812 118.375 21.6719 117.719 22.7344C117.062 23.7656 116.516 24.875 116.078 26.0625C115.641 27.25 115.391 28.3125 115.328 29.25C115.266 30.75 115.453 31.8281 115.891 32.4844C116.328 33.1406 116.922 33.4688 117.672 33.4688C118.234 33.4688 118.844 33.25 119.5 32.8125C120.188 32.375 120.844 31.8438 121.469 31.2188C122.125 30.5938 122.719 29.9531 123.25 29.2969C123.812 28.6406 124.266 28.0938 124.609 27.6562ZM156.906 26.25C155.969 27.625 154.906 28.9688 153.719 30.2812C152.531 31.5625 151.266 32.7188 149.922 33.75C148.609 34.75 147.25 35.5625 145.844 36.1875C144.469 36.8125 143.125 37.125 141.812 37.125C141.125 37.125 140.375 36.9531 139.562 36.6094C138.781 36.2969 138.062 35.7969 137.406 35.1094C136.75 34.4219 136.219 33.5312 135.812 32.4375C135.438 31.3438 135.328 30.0156 135.484 28.4531C135.609 27.1719 136 25.8281 136.656 24.4219C137.344 22.9844 138.172 21.6719 139.141 20.4844C140.141 19.2969 141.25 18.3125 142.469 17.5312C143.719 16.75 144.969 16.3594 146.219 16.3594C147.406 16.3594 148.266 16.6562 148.797 17.25C149.328 17.8438 149.562 18.5781 149.5 19.4531C149.406 20.4219 149.125 21.3125 148.656 22.125C148.219 22.9375 147.688 23.6719 147.062 24.3281C146.438 24.9844 145.766 25.5781 145.047 26.1094C144.359 26.6406 143.703 27.125 143.078 27.5625C142.391 28.0312 141.734 28.4844 141.109 28.9219C140.484 29.3281 139.938 29.7031 139.469 30.0469C139.5 30.8281 139.641 31.4844 139.891 32.0156C140.141 32.5469 140.453 32.9844 140.828 33.3281C141.203 33.6406 141.625 33.875 142.094 34.0312C142.594 34.1562 143.094 34.2188 143.594 34.2188C144.656 34.2188 145.766 33.8906 146.922 33.2344C148.078 32.5469 149.203 31.7344 150.297 30.7969C151.422 29.8281 152.453 28.8281 153.391 27.7969C154.359 26.7656 155.156 25.875 155.781 25.125C156 24.875 156.219 24.7344 156.438 24.7031C156.688 24.6406 156.875 24.6719 157 24.7969C157.156 24.8906 157.234 25.0781 157.234 25.3594C157.234 25.6094 157.125 25.9062 156.906 26.25ZM144.906 19.0312C144.531 19.0312 144.078 19.2188 143.547 19.5938C143.047 19.9688 142.547 20.5156 142.047 21.2344C141.547 21.9219 141.078 22.7812 140.641 23.8125C140.203 24.8125 139.875 25.9688 139.656 27.2812C140.031 27 140.438 26.7188 140.875 26.4375C141.312 26.125 141.75 25.7969 142.188 25.4531C143.531 24.4219 144.469 23.5156 145 22.7344C145.531 21.9531 145.828 21.2812 145.891 20.7188C145.953 20.125 145.891 19.7031 145.703 19.4531C145.516 19.1719 145.25 19.0312 144.906 19.0312ZM167.266 27.6562C166.453 28.8438 165.609 30 164.734 31.125C163.891 32.25 163.062 33.2656 162.25 34.1719C161.469 35.0469 160.734 35.75 160.047 36.2812C159.391 36.8438 158.859 37.125 158.453 37.125C157.484 37.125 156.688 36.6719 156.062 35.7656C155.469 34.8281 155 33.6875 154.656 32.3438C154.344 30.9688 154.141 29.5156 154.047 27.9844C153.984 26.4219 154 25.0312 154.094 23.8125C154.219 22.5938 154.359 21.625 154.516 20.9062C154.672 20.1562 154.859 19.5781 155.078 19.1719C155.328 18.7656 155.609 18.4688 155.922 18.2812C156.266 18.0938 156.688 17.9375 157.188 17.8125C157.406 17.75 157.656 17.7031 157.938 17.6719C158.219 17.6406 158.469 17.6562 158.688 17.7188C158.938 17.75 159.125 17.8438 159.25 18C159.375 18.1562 159.391 18.3906 159.297 18.7031C159.234 18.9844 159.125 19.4062 158.969 19.9688C158.844 20.5 158.703 21.1094 158.547 21.7969C158.391 22.4844 158.234 23.2031 158.078 23.9531C157.953 24.7031 157.859 25.4219 157.797 26.1094C157.703 27.2969 157.703 28.3438 157.797 29.25C157.891 30.125 158.031 30.875 158.219 31.5C158.406 32.0938 158.609 32.5469 158.828 32.8594C159.047 33.1719 159.219 33.3281 159.344 33.3281C159.5 33.3281 159.781 33.125 160.188 32.7188C160.625 32.2812 161.109 31.7188 161.641 31.0312C162.203 30.3438 162.781 29.5469 163.375 28.6406C164 27.7344 164.578 26.7969 165.109 25.8281C164.922 25.3281 164.844 24.7344 164.875 24.0469C164.969 22.9844 165.203 22.0312 165.578 21.1875C165.953 20.3125 166.375 19.5781 166.844 18.9844C167.344 18.3906 167.844 17.9375 168.344 17.625C168.875 17.2812 169.344 17.1094 169.75 17.1094C170.562 17.1094 171.062 17.3281 171.25 17.7656C171.469 18.1719 171.547 18.5938 171.484 19.0312C171.422 19.6875 171.125 20.5938 170.594 21.75C170.094 22.875 169.438 24.1094 168.625 25.4531C168.781 25.5156 168.953 25.5781 169.141 25.6406C169.328 25.7031 169.547 25.7344 169.797 25.7344C170.859 25.7344 171.812 25.6094 172.656 25.3594C173.531 25.1094 174.281 24.8125 174.906 24.4688C175.562 24.125 176.109 23.7656 176.547 23.3906C177.016 22.9844 177.391 22.6562 177.672 22.4062C177.859 22.2188 178.047 22.125 178.234 22.125C178.422 22.125 178.578 22.1719 178.703 22.2656C178.828 22.3594 178.891 22.5 178.891 22.6875C178.891 22.875 178.797 23.0781 178.609 23.2969C177.484 24.6719 176.109 25.7812 174.484 26.625C172.891 27.4688 171.016 27.8906 168.859 27.8906C168.672 27.8906 168.438 27.875 168.156 27.8438C167.875 27.8125 167.578 27.75 167.266 27.6562ZM204.25 0.890625C205.031 0.734375 205.547 0.6875 205.797 0.75C206.078 0.78125 206.188 0.875 206.125 1.03125C205.969 1.28125 205.625 1.84375 205.094 2.71875C204.562 3.59375 203.906 4.6875 203.125 6C202.344 7.28125 201.469 8.71875 200.5 10.3125C199.562 11.9062 198.609 13.5312 197.641 15.1875C196.703 16.8438 195.797 18.4688 194.922 20.0625C194.078 21.6562 193.344 23.1094 192.719 24.4219C191.938 25.8906 191.203 27.3281 190.516 28.7344C189.922 29.9219 189.312 31.1875 188.688 32.5312C188.062 33.8438 187.562 34.9531 187.188 35.8594C186.688 36.1094 186.25 36.2812 185.875 36.375C185.469 36.5 185.109 36.5938 184.797 36.6562C184.453 36.7188 184.125 36.75 183.812 36.75C183.188 36.75 182.844 36.6719 182.781 36.5156C182.688 36.3594 182.75 36.0781 182.969 35.6719C183.188 35.2969 183.734 34.3125 184.609 32.7188C184.984 32.0312 185.453 31.1875 186.016 30.1875C186.578 29.1562 187.266 27.9062 188.078 26.4375C188.891 24.9688 189.844 23.2656 190.938 21.3281C192.031 19.3594 193.281 17.1094 194.688 14.5781L201.109 3.09375C201.422 2.46875 201.781 2.01562 202.188 1.73438C202.625 1.42188 203.312 1.14063 204.25 0.890625ZM206.641 11.8125C206.672 11.875 206.859 12.1875 207.203 12.75C207.547 13.3125 207.953 14 208.422 14.8125C208.922 15.625 209.438 16.5312 209.969 17.5312C210.531 18.5 211.047 19.4375 211.516 20.3438C211.578 20.5 211.656 20.6875 211.75 20.9062C211.875 21.0938 211.938 21.2344 211.938 21.3281C211.938 21.3594 211.906 21.4219 211.844 21.5156C211.781 21.5781 211.703 21.6719 211.609 21.7969C211.516 21.9219 211.375 22.0625 211.188 22.2188L202.938 29.1562C202.719 29.3125 202.5 29.4688 202.281 29.625C202.094 29.75 201.859 29.8594 201.578 29.9531C201.297 30.0469 200.953 30.1406 200.547 30.2344C200.141 30.2969 199.641 30.3594 199.047 30.4219C198.547 30.4844 198.156 30.5156 197.875 30.5156C197.594 30.4844 197.391 30.4531 197.266 30.4219C197.109 30.3594 197.016 30.2969 196.984 30.2344C196.953 30.1719 196.969 30.125 197.031 30.0938C197.219 29.9375 197.656 29.5625 198.344 28.9688C199.031 28.3438 199.875 27.5938 200.875 26.7188C201.875 25.8438 202.953 24.875 204.109 23.8125C205.266 22.75 206.406 21.6875 207.531 20.625C207.344 20.3125 207.141 20 206.922 19.6875C206.734 19.3438 206.578 19.0469 206.453 18.7969C205.922 17.8594 205.391 16.9531 204.859 16.0781C204.422 15.3281 203.953 14.5469 203.453 13.7344C202.984 12.8906 202.562 12.1562 202.188 11.5312C202.312 11.4375 202.5 11.375 202.75 11.3438C203 11.2812 203.25 11.2344 203.5 11.2031C203.812 11.1719 204.141 11.1562 204.484 11.1562C205.266 11.1562 205.781 11.2031 206.031 11.2969C206.281 11.3906 206.484 11.5625 206.641 11.8125Z"
                  fill={fillColor || "white"}
              />
          </svg>
      </div>
  );
}

export default LogoSvg