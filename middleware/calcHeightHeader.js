export default function () {
  // Определяем высоту хедера, чтобы высота главной странице была равно высоте экрана - высота хедера
  try {
    let height = document.getElementById("header").clientHeight;
    return height
  } catch (err) {
    console.log(err);
    return 0;
  }
}
