// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const icon = (id: number) => {
  switch (id) {
    case 1:
      return 'rainy-1' as string;
    case 2:
      return 'rainy-2' as string;
    case 3:
      return 'rainy-3' as string;
    // TODO: implement different cases
    default:
      return 'icon-missing' as string;
  }
};

export default icon;
