import avatar from '../../../images/avatar.png';

export default function ProfilePage() {
  return (
    <main className="profile">
      <div className="profile__img">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="profile__info">
        <div className="info__nickname">
          <strong>nikname</strong>
          : Admin
        </div>
        <div className="info__date">
          <strong>date of registration</strong>
          : 27.03.2022
        </div>
        <div className="info__about">
          <strong>about</strong>
          : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eu dictum orci. Pellentesque euismod odio eget lacus egestas rhoncus.
          Curabitur lacinia congue augue, eu venenatis ligula. Aliquam egestas
          fermentum feugiat. Proin pellentesque porta auctor. Morbi laoreet
          porta dui, at hendrerit erat cursus eu. Nullam sit amet lacus
          molestie, varius odio vitae, consequat lorem. Nunc pellentesque lorem
          sed tortor venenatis condimentum semper a lorem. Nam varius hendrerit
          libero. Cras fermentum vel tellus vel interdum. Etiam facilisis tellus
          in neque pretium semper. Vestibulum rhoncus, enim in tempor viverra,
          enim nisi fermentum mauris, sit amet malesuada elit leo in quam.
          Integer ligula urna, viverra nec rhoncus ac, viverra quis quam. Mauris
          mattis sed tellus vitae ullamcorper. Vestibulum erat ligula, vehicula
          et massa bibendum, auctor maximus dolor. Mauris tempor iaculis turpis
          at maximus. Fusce ligula odio, semper id aliquam a, lobortis ut ex.
          Mauris pulvinar nunc sem.
        </div>
      </div>
    </main>
  );
}
