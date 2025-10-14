@echo off
echo ===== Gradle 빌드 시작 =====
cd /d %~dp0
call gradlew clean build
if %ERRORLEVEL% EQU 0 (
    echo ✅ 빌드 성공! jar 파일이 build/libs 폴더에 생성되었습니다.
) else (
    echo ❌ 빌드 실패! 에러 로그를 확인해주세요.
)
pause