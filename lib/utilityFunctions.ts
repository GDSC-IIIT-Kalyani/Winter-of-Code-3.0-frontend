export const handleScroll = (id: string) => {
  var element = document.getElementById(id);
  var headerOffset = 80;
  var elementPosition = element!.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
