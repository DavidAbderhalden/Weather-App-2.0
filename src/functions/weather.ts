const icon = (id: number) => {
  switch (id) {
    case 1:
      return '' as string;
    // TODO: implement different cases
    default:
      return 'icon-missing' as string;
  }
};

export default icon;
