-- Export : user1/password1 ������ �־�� ��
-- ��� ���� ����
CREATE OR REPLACE DIRECTORY backup_dir AS 'D:\_Project\Blog\back\oracle_backup';

-- ��� ���� ���� Ȯ��
SELECT * FROM ALL_DIRECTORIES WHERE DIRECTORY_NAME = 'BACKUP_DIR';
SELECT * FROM USER_TAB_PRIVS WHERE TABLE_NAME = 'BACKUP_DIR';

-- cmd���� ����
expdp user1/password1 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=backup.log FULL=Y

-- Import : user2/password2 ������ �־�� ��
-- ��� ���� ���� : Export���� ���� DMP������ �־�� ��
CREATE OR REPLACE DIRECTORY backup_dir AS 'D:\Blog\back\oracle_backup';

-- ��� ���� ���� Ȯ��
SELECT * FROM ALL_DIRECTORIES WHERE DIRECTORY_NAME = 'BACKUP_DIR';
SELECT * FROM USER_TAB_PRIVS WHERE TABLE_NAME = 'BACKUP_DIR';

-- cmd���� ����
-- ���� DB ��ü�� ������ ������ �� �� ����
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log FULL=Y
-- *** ���� ���̺��� ���� ��� �����ϰ� �ٽ� ����
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log FULL=Y TABLE_EXISTS_ACTION=REPLACE
-- * Ư�� ��Ű��(user2)�� Import
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log SCHEMAS=user2
-- * Ư�� ���̺�(table1, table2)�� Import
impdp user2/password2 DIRECTORY=BACKUP_DIR DUMPFILE=backup.dmp LOGFILE=import.log TABLES=table1, table2
