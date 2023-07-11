const uaPalette = {
    uaRed: "#AB0520",
    uaBlue: "#0C234B",
    uaBloom: "#EF4056",
    uaChili: "#8B0015",
    uaSky: "#81D3EB",
    uaAzurite: "#1E5288",
    uaOasis: "#378DBD",
    uaMidnight: "#001C48",
    uaLeaf: "#70B865",
    uaRiver: "#007D84",
    uaMesa: "#A95C42",
};

const newPalette = {
    white: "#ffffff",
    lightSilver: "#e2e2e2",
    silver: "#a5a4a4",
    blueGrey: "#48515f",
    bgGray: "#f4f4f4",
    black: "#000000",
    darkNavy: "#142248",
    navy: "#004471",
    cobalt: "#0971AB", // primary
    sky: "#99D9EA",
    yellow: "#F7D21E",
    gold: "#F8981D",
    violet: "#AA2173",
    indigo: "#4A2E8D",
    leaf: "#378F43",
    grass: "#7CB342",
    alertRed: "#AF0404",
};

// Merge the two palettes for now. We'll eventually remove the old palette.
export default {
    ...newPalette,
    ...uaPalette,
};
