const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('Should return the restaurant that has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3)).toEqual(undefined);
  });

  it('Should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.putResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllResto()).toEqual([]);
  });

  it('Can return all of the restaurant that have been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('Should remove favorite restaurant', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(1);

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('Should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });
    favoriteResto.putResto({ id: 3 });

    await favoriteResto.deleteResto(4);

    expect(await favoriteResto.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
