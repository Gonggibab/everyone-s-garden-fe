import HttpRequest from './HttpRequest';

export const GardenAPI = {
  getGardenByRegion: async (type: number, region: string) => {
    const typeList = ['all', 'public', 'private'];
    const { data } = await HttpRequest.get(`v1/garden/${typeList[type]}/by-region?region=${region}&page=1&size=50`);
    return data;
  },
  getGardenByCoordinate: async (type: number, map: naver.maps.Map) => {
    const bounds = map.getBounds();
    const typeList = ['all', 'public', 'private'];

    const { data } = await HttpRequest.get(
      `v1/garden/${
        typeList[type]
      }/by-coordinate?lat=${bounds.minY()},${bounds.maxY()}&long=${bounds.minX()},${bounds.maxX()}&page=1&size=50`,
    );

    return data;
  },
  getGardenDetail: async (gardenID: number) => {
    const { data } = await HttpRequest.get(`/v1/garden/${gardenID}`);
    return data;
  },
};
