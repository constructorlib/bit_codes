import subprocess

def restart_gpu_driver():
    try:
        subprocess.run(['powershell', '-Command', '$wsh = New-Object -ComObject WScript.Shell; $wsh.SendKeys("^(%+b)");'], check=True)
        print("GPU driver has been restarted.")
    except subprocess.CalledProcessError as e:
        print("Error occurred while restarting GPU driver:", e)

if __name__ == "__main__":
    restart_gpu_driver()
# TODO make executable later on