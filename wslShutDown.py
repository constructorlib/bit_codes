import subprocess
import ctypes
import sys

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def shutdown_wsl():
    try:
        subprocess.run(['wsl', '--shutdown'], check=True)
        print("WSL has been successfully shut down.")
    except subprocess.CalledProcessError as e:
        print("Error occurred while shutting down WSL:", e)

if __name__ == "__main__":
    if is_admin():
        shutdown_wsl()
    else:
        ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)
# TODO make it executable // done
# TODO fix issue with not asking priveleges