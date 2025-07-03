-- Export : user1/password1 계정이 있어야 함
-- 백업 폴더 연결
CREATE OR REPLACE DIRECTORY backup_dir AS 'D:\_Project\Blog\back\oracle_backup';

-- 백업 폴더 연결 확인
SELECT * FROM ALL_DIRECTORIES WHERE DIRECTORY_NAME = 'BACKUP_DIR';
SELECT * FROM USER_TAB_PRIVS WHERE TABLE_NAME = 'BACKUP_DIR';

-- cmd에서 실행
expdp user1/password1 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=backup.log FULL=Y

-- Import : user2/password2 계정이 있어야 함
-- 백업 폴더 연결 : Export에서 생긴 DMP파일이 있어야 함
CREATE OR REPLACE DIRECTORY backup_dir AS 'D:\Blog\back\oracle_backup';

-- 백업 폴더 연결 확인
SELECT * FROM ALL_DIRECTORIES WHERE DIRECTORY_NAME = 'BACKUP_DIR';
SELECT * FROM USER_TAB_PRIVS WHERE TABLE_NAME = 'BACKUP_DIR';

-- cmd에서 실행
-- 기존 DB 객체가 있으면 오류가 날 수 있음
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log FULL=Y
-- *** 기존 테이블이 있을 경우 삭제하고 다시 생성
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log FULL=Y TABLE_EXISTS_ACTION=REPLACE
-- * 특정 스키마(user2)만 Import
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log SCHEMAS=user2
-- * 특정 테이블(table1, table2)만 Import
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log TABLES=table1, table2
