export const getData = async (path: string) => {
  try {
    const data = await fetch(`/api${path}`, {
      headers: {
        Authorization: window.localStorage.getItem('f-authToken') ?? '',
      },
    });
    if (data.ok) {
      return await data.json();
    }
    if (400 <= data.status && data.status < 500) {
      const res = await fetch('/api/reissue', {
        headers: {
          Authorization: window.localStorage.getItem('f-authToken') ?? '',
        },
      });

      localStorage.setItem('f-authToken', res.headers.get('Authorization') ?? '');
    }

    const reData = await fetch(`/api${path}`, {
      headers: {
        Authorization: window.localStorage.getItem('f-authToken') ?? '',
      },
    });

    if (!reData.ok) throw Error();
    else return await reData.json();
  } catch {
    window.alert('재로그인 해 주세요.');
  }
};
