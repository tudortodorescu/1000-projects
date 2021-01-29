Tesseract.recognize(
    'https://scontent.fclj3-1.fna.fbcdn.net/v/t1.15752-9/144119703_199012615305266_2315986946132884876_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=z12i-MdmZ8oAX9FA18t&_nc_ht=scontent.fclj3-1.fna&oh=c715960f9d9ba43746f343504365b295&oe=603B01E5',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })