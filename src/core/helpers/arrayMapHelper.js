export default function arrayMapHelper(arr, lines, deg, i) {

  arr.map((item) => {
    lines[item].style.transform = `rotate(${deg}deg)`;
    lines[item].style.height = '50%';
    if(deg+i > 30) {
      deg = 33;
    } else {
      deg+=i;
    }
  });
}