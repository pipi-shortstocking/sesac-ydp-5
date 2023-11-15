const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2 ...}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

  //   // [실습 1]
  //   socket.on('hello', (data) => {
  //     console.log(data);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!!!' });
  //   });

  //   socket.on('study', (data) => {
  //     console.log(data);
  //     socket.emit('studyKr', { who: 'study', msg: '공부 중!!!!' });
  //   });

  //   socket.on('bye', (data) => {
  //     console.log(data);
  //     socket.emit('byeKr', { who: 'bye', msg: '잘 가요!!!!' });
  //   });

  // [실습 2]
  socket.on('client-send', (data) => {
    console.log(data.msg);
    socket.emit('sendKr', { msg: `${data.msg}` });
  });

  // [실습 3] 채팅장 입장 안내 문구
  //   io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  // [실습 3-2]
  // emit() from server
  // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
  // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
  socket.on('setNick', (nick) => {
    // 프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임입니다'
    // 새 닉네임; notice 이벤트 + ${nick} 님이 입장하셨습니다.
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      // 이미 존재하는 닉네임이 있음
      socket.emit('error', `이미 존재하는 닉네임입니다.`);
    } else {
      // 새로운 닉네임
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 :: ', nickObjs);
      io.emit('notice', `${nick}님이 입장하셨습니다.`); // 전체 공지
      socket.emit('entrySuccess', nick); // 해당 소켓 데이터 전송
      updateList();
    }
  });

  // [실습 3-3] 클라이언트 퇴장시
  // "notice" 이벤트로 퇴장 공지
  socket.on('disconnect', () => {
    console.log('접속 끊김:: ', socket.id);

    io.emit('notice', `${nickObjs[socket.id]} 님이 퇴장하셔습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
